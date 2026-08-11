
import { admissionSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function AdmissionTimeline() {
  return (
    <Section
      id="how-to-apply"
      className="!py-10 bg-[#f8f8f7]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-7 text-center">
          <SectionHeading
            eyebrow="ADMISSION PROCESS"
            title="Your journey starts here"
            description="Six simple steps from application to your first lesson — completely online."
          />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div
            className="
              absolute
              left-[8.33%]
              right-[8.33%]
              top-[21px]
              hidden
              h-[2px]
              bg-[#d4af37]/50
              lg:block
            "
          />

          <ol
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-6
              lg:gap-2
            "
          >
            {admissionSteps.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 0.06}>
                  <div
                    className="
                      group
                      relative
                      h-full
                      px-3
                      py-3
                      text-center
                    "
                  >

                    {/* Step Circle */}
                    <div className="relative z-10 mx-auto mb-4 flex justify-center">
                      <span
                        className="
                          flex
                          size-[44px]
                          items-center
                          justify-center
                          rounded-full
                          border-[3px]
                          border-[#d4af37]
                          bg-[#172554]
                          text-[14px]
                          font-bold
                          text-white
                          shadow-[0_4px_14px_rgba(23,37,84,0.18)]
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:bg-[#7f1d1d]
                        "
                      >
                        {String(s.step).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Small Gold Marker */}
                    <div
                      className="
                        mx-auto
                        mb-2
                        h-[3px]
                        w-7
                        rounded-full
                        bg-[#d4af37]
                        transition-all
                        duration-300
                        group-hover:w-12
                        group-hover:bg-[#7f1d1d]
                      "
                    />

                    {/* Title */}
                    <h3
                      className="
                        text-[14px]
                        font-bold
                        leading-tight
                        text-[#172554]
                        transition-colors
                        duration-300
                        group-hover:text-[#7f1d1d]
                      "
                    >
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mx-auto
                        mt-1.5
                        max-w-[155px]
                        text-[11.5px]
                        leading-[1.45]
                        text-[#4b4b4b]
                      "
                    >
                      {s.body}
                    </p>

                    {/* Bottom number */}
                    <span
                      className="
                        mt-2
                        block
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#7f1d1d]/45
                      "
                    >
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom strip */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-center
          "
        >
          <span className="h-px w-10 bg-[#d4af37]" />

          <span
            className="
              rounded-full
              bg-[#172554]
              px-4
              py-1.5
              text-[10px]
              font-semibold
              tracking-[0.12em]
              text-white
            "
          >
            SIMPLE • DIGITAL • SUPPORTED
          </span>

          <span className="h-px w-10 bg-[#d4af37]" />
        </div>

      </div>
    </Section>
  );
}

