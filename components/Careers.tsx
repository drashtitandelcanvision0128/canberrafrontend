import React, { useEffect, useRef } from "react";

const Careers: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scriptId = "ceipal-jobs-widget-script";
    const containerId = "example-widget-container";

    // Inject script once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://jobsapi.ceipal.com/APISource/widget.js";
      script.async = true;
      script.setAttribute(
        "data-ceipal-api-key",
        "UEVNbW9ZUUxUYUVramtuNVUrZEFFQT09"
      );
      script.setAttribute(
        "data-ceipal-career-portal-id",
        "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"
      );
      document.body.appendChild(script);
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    let didInitialRender = false;
    let scrollTimer: number | null = null;

    const scrollToTopOfCareers = () => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const scheduleScroll = () => {
      if (!didInitialRender) return;

      if (scrollTimer !== null) {
        window.clearTimeout(scrollTimer);
      }

      scrollTimer = window.setTimeout(() => {
        requestAnimationFrame(scrollToTopOfCareers);
      }, 0);
    };

    const onWidgetInteractionCapture = () => {
      if (!didInitialRender) return;
      scheduleScroll();
    };

    const onWidgetKeydownCapture = (e: Event) => {
      if (!didInitialRender) return;
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter") {
        scheduleScroll();
      }
    };

    container.addEventListener("click", onWidgetInteractionCapture, true);
    container.addEventListener("change", onWidgetInteractionCapture, true);
    container.addEventListener("submit", onWidgetInteractionCapture, true);
    container.addEventListener("keydown", onWidgetKeydownCapture, true);

    const observer = new MutationObserver(() => {
      if (!didInitialRender) {
        if (container.childNodes.length > 0) {
          didInitialRender = true;
        }
        return;
      }
      scheduleScroll();
    });

    observer.observe(container, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
    });

    return () => {
      observer.disconnect();

      if (scrollTimer !== null) {
        window.clearTimeout(scrollTimer);
      }

      container.removeEventListener("click", onWidgetInteractionCapture, true);
      container.removeEventListener("change", onWidgetInteractionCapture, true);
      container.removeEventListener("submit", onWidgetInteractionCapture, true);
      container.removeEventListener("keydown", onWidgetKeydownCapture, true);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-100"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-tms-blue">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            We're looking for passionate innovators to help us engineer the future.
            Explore our open positions and find your next opportunity at TMS.
          </p>
        </div>

        <div
          id="example-widget-container"
          className="max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Careers;