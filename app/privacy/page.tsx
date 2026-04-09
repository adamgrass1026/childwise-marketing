import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ChildWise",
  description:
    "How ChildWise collects, uses, and protects information for childcare centers, staff, and families.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-ink relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(10,191,188,.1)_0%,transparent_55%),radial-gradient(ellipse_40%_40%_at_0%_0%,rgba(27,108,168,.12)_0%,transparent_50%)]" />
        <div className="max-w-wrap mx-auto px-9 py-20 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/60 hover:text-white transition-colors mb-6"
          >
            ← Back to ChildWise
          </Link>
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-white/90 px-3.5 py-[5px] bg-white/[.12] border border-white/25 rounded-full mb-[18px]">
            Legal
          </div>
          <h1 className="font-heading text-[clamp(34px,4.5vw,52px)] font-semibold text-white leading-[1.1] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-white/60 mt-4">
            Last updated: April 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-[760px] mx-auto px-9 py-16 font-body text-[15px] text-slate leading-[1.75]">
          <p className="text-[17px] text-ink leading-[1.7] mb-10">
            ChildWise (&ldquo;ChildWise,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides
            software that helps childcare centers manage their operations, staff, and
            communications with families. This Privacy Policy explains what information
            we collect, how we use it, and the choices you have. By using{" "}
            <a
              href="https://childwisesoftware.com"
              className="text-teal font-semibold hover:underline"
            >
              childwisesoftware.com
            </a>{" "}
            or any ChildWise application, you agree to the practices described below.
          </p>

          <PolicySection title="1. Information We Collect">
            <p>
              We collect information that childcare centers, their staff, and the
              families they serve provide to us, along with information generated
              automatically when you use our services.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong className="text-ink font-semibold">Account information:</strong>{" "}
                name, email address, phone number, role (director, teacher, parent),
                and center affiliation.
              </li>
              <li>
                <strong className="text-ink font-semibold">Center operations data:</strong>{" "}
                staff schedules, attendance, time-clock entries, room assignments,
                licensing and certification records, observations, and billing records.
              </li>
              <li>
                <strong className="text-ink font-semibold">Family and child records:</strong>{" "}
                enrollment details, emergency contacts, attendance, developmental
                observations, and communications — provided to us by the childcare
                center acting on behalf of families.
              </li>
              <li>
                <strong className="text-ink font-semibold">Payment information:</strong>{" "}
                billing contact and subscription details. Card numbers and bank
                information are handled directly by our payment processor, Square, and
                are never stored on ChildWise servers.
              </li>
              <li>
                <strong className="text-ink font-semibold">Usage information:</strong>{" "}
                pages visited, features used, device and browser type, IP address, and
                approximate location, collected through standard server logs and cookies.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide, maintain, and improve the ChildWise platform.</li>
              <li>
                Authenticate users, secure accounts, and prevent fraud or abuse.
              </li>
              <li>
                Generate schedules, observations, forecasts, and reports requested by
                the center.
              </li>
              <li>
                Send transactional messages (e.g., billing receipts, password resets,
                security alerts) and product updates.
              </li>
              <li>
                Provide customer support and respond to questions or requests.
              </li>
              <li>
                Comply with legal obligations and enforce our terms of service.
              </li>
            </ul>
            <p className="mt-4">
              We do not sell personal information, and we do not use childcare or child
              data for advertising.
            </p>
          </PolicySection>

          <PolicySection title="3. Information Sharing">
            <p>
              We share information only with the service providers and parties needed
              to operate ChildWise on behalf of the childcare center:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong className="text-ink font-semibold">Square</strong> — processes
                subscription payments and handles all card data.
              </li>
              <li>
                <strong className="text-ink font-semibold">Supabase</strong> — hosts
                our managed PostgreSQL database and authentication services.
              </li>
              <li>
                <strong className="text-ink font-semibold">Resend</strong> — delivers
                transactional email (receipts, password resets, notifications).
              </li>
              <li>
                <strong className="text-ink font-semibold">Authorized center staff</strong>{" "}
                — directors and teachers at your center can access records for the
                children and families enrolled at that center.
              </li>
              <li>
                <strong className="text-ink font-semibold">Legal and safety</strong> —
                we may disclose information when required by law, court order, or to
                protect the rights, property, or safety of ChildWise, our users, or the
                public.
              </li>
            </ul>
            <p className="mt-4">
              We do not share personal information with advertisers, data brokers, or
              unrelated third parties.
            </p>
          </PolicySection>

          <PolicySection title="4. Data Related to Children">
            <p>
              ChildWise is a tool used by licensed childcare centers. Information about
              children is entered into ChildWise by the center on behalf of the
              enrolling family, and the center is responsible for obtaining any
              required parental consent.
            </p>
            <p className="mt-4">
              We treat information about children with heightened care: it is used
              solely to deliver the services requested by the center (e.g., attendance,
              observations, family communication), is never sold, is never used for
              advertising, and is never used to build profiles outside the center&rsquo;s
              use of the platform.
            </p>
            <p className="mt-4">
              Parents and guardians who want to review, correct, or delete information
              about their child should contact the childcare center directly. The
              center can make changes inside ChildWise, or contact us for assistance.
            </p>
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p>
              We use industry-standard safeguards to protect the information we store,
              including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>TLS encryption for data in transit.</li>
              <li>Encryption at rest for our managed database.</li>
              <li>Hashed, salted passwords — we never store plaintext passwords or PINs.</li>
              <li>Role-based access controls so staff only see data for their own center.</li>
              <li>Audit logging of sensitive administrative actions.</li>
            </ul>
            <p className="mt-4">
              No system is perfectly secure. If we ever learn of a breach that affects
              your information, we will notify affected customers and applicable
              authorities as required by law.
            </p>
          </PolicySection>

          <PolicySection title="6. Data Retention">
            <p>
              We retain your information for as long as your ChildWise account is
              active and the data is needed to provide the service. If a center
              cancels its subscription, we retain account and center data for{" "}
              <strong className="text-ink font-semibold">90 days</strong> after
              cancellation to allow for reactivation and final exports. After that
              period, data is permanently deleted from our production systems, except
              where we are required to retain limited records (such as billing
              history) to comply with legal or accounting obligations.
            </p>
            <p className="mt-4">
              Backups are rotated on a regular schedule and are purged in the normal
              course of operations.
            </p>
          </PolicySection>

          <PolicySection title="7. Your Rights">
            <p>
              Depending on where you live, you may have rights under applicable privacy
              laws, including the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Access a copy of the personal information we hold about you.</li>
              <li>Correct information that is inaccurate or out of date.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw any consent you previously provided.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, email us at{" "}
              <a
                href="mailto:privacy@childwisesoftware.com"
                className="text-teal font-semibold hover:underline"
              >
                privacy@childwisesoftware.com
              </a>
              . If your information was provided to ChildWise by a childcare center,
              we may direct your request to the center so they can verify your
              relationship before we act.
            </p>
          </PolicySection>

          <PolicySection title="8. Cookies">
            <p>
              ChildWise uses a small number of essential cookies and similar
              technologies to keep you signed in, remember your preferences, and keep
              the service secure. We do not use advertising or cross-site tracking
              cookies. You can disable cookies in your browser settings, but some parts
              of the platform may not work correctly without them.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the &ldquo;Last updated&rdquo; date at
              the top of this page and, where appropriate, notify you by email or
              through the app. Continued use of ChildWise after an update means you
              accept the revised policy.
            </p>
          </PolicySection>

          <PolicySection title="10. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how ChildWise handles
              your information, please contact us:
            </p>
            <div className="mt-4 p-5 bg-page-bg border border-border rounded-[13px]">
              <div className="text-[13px] text-slate/70 uppercase tracking-wider font-bold mb-2">
                ChildWise
              </div>
              <div className="text-ink">
                <a
                  href="mailto:privacy@childwisesoftware.com"
                  className="text-teal font-semibold hover:underline"
                >
                  privacy@childwisesoftware.com
                </a>
              </div>
              <div className="text-ink mt-1">
                <a
                  href="https://childwisesoftware.com"
                  className="text-teal font-semibold hover:underline"
                >
                  childwisesoftware.com
                </a>
              </div>
            </div>
          </PolicySection>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-teal hover:underline"
            >
              ← Back to ChildWise
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-[22px] font-semibold text-ink leading-[1.3] mb-4">
        {title}
      </h2>
      <div className="text-slate">{children}</div>
    </div>
  );
}
