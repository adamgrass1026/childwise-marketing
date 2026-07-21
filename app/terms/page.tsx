import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ChildWise",
  description:
    "The Terms of Service governing use of the ChildWise childcare center management platform, including subscriptions and payment processing through Finix.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-[15px] text-white/60 mt-4">
            Last updated: July 21, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-[760px] mx-auto px-9 py-16 font-body text-[15px] text-slate leading-[1.75]">
          <TermsSection title="1. Acceptance of Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement
              between ChildWise Software LLC, a Michigan limited liability company
              (&ldquo;ChildWise,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), and the
              childcare organization that registers for or uses the ChildWise
              platform (&ldquo;Customer,&rdquo; &ldquo;you&rdquo;). By creating an
              account, signing an order form, or using the Services, you accept
              these Terms on behalf of your organization and represent that you
              have authority to do so.
            </p>
            <p className="mt-4">
              If you do not agree to these Terms, do not use the Services.
            </p>
          </TermsSection>

          <TermsSection title="2. Description of the Services">
            <p>
              ChildWise provides a cloud-based childcare center management
              platform, accessible at app.childwisesoftware.com and through the
              ChildWise mobile applications (collectively, the
              &ldquo;Services&rdquo;). The Services include tools for enrollment
              and family management, staff scheduling, attendance, communication,
              billing, and integrated payment processing.
            </p>
            <p className="mt-4">
              We may improve, modify, or discontinue features of the Services from
              time to time. We will provide reasonable notice of any change that
              materially reduces the core functionality of the Services.
            </p>
          </TermsSection>

          <TermsSection title="3. Related Services — ChildWise Learning">
            <p>
              ChildWise Learning is a separate continuing-education and training
              platform operated under common ownership with ChildWise Software
              LLC. ChildWise Learning is offered through its own website and is
              governed by its own terms of service. Use of the ChildWise platform
              does not require use of ChildWise Learning, and vice versa. Where
              the two services are linked (for example, single sign-on or shared
              account information), each service&rsquo;s own terms govern your use
              of that service.
            </p>
          </TermsSection>

          <TermsSection title="4. Accounts and Access">
            <p>
              <strong className="text-ink font-semibold">
                4.1 Account structure.
              </strong>{" "}
              The Services are organized by company and center. Customer is
              responsible for designating administrators, managing user roles and
              permissions, and ensuring that access is limited to authorized
              personnel.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">4.2 Credentials.</strong>{" "}
              You are responsible for maintaining the confidentiality of login
              credentials and for all activity under your accounts. Notify us
              promptly at the contact address below of any suspected unauthorized
              access.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                4.3 Accurate information.
              </strong>{" "}
              You agree to provide accurate, current, and complete information
              during registration and to keep it updated.
            </p>
          </TermsSection>

          <TermsSection title="5. Fees and Payment for the Services">
            <p>
              <strong className="text-ink font-semibold">
                5.1 Subscription fees.
              </strong>{" "}
              Access to the Services is provided on a subscription basis at the
              rates stated in your order form, founders offer, or other written
              agreement with ChildWise. Unless otherwise stated, subscription fees
              are billed monthly in advance and are non-refundable except as
              required by law or expressly stated in your agreement.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">5.2 Changes.</strong> We
              may change subscription pricing with at least thirty (30)
              days&rsquo; written notice; changes take effect at your next billing
              cycle after the notice period. Pricing locked in a written agreement
              (including founders or promotional pricing) will be honored per that
              agreement.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                5.3 Late payment; suspension.
              </strong>{" "}
              We may suspend access to the Services for accounts with amounts more
              than fifteen (15) days past due, after notice and an opportunity to
              cure.
            </p>
          </TermsSection>

          <TermsSection title="6. Payment Processing">
            <p>
              <strong className="text-ink font-semibold">
                6.1 Provided through Finix.
              </strong>{" "}
              Tuition and other payment processing within the Services is provided
              through our payments partner, Finix Payments, Inc. and its banking
              partners (&ldquo;Finix&rdquo;). To accept payments, Customer must
              complete Finix&rsquo;s merchant onboarding and underwriting process
              and enter into a separate merchant agreement with Finix. Approval to
              process payments is determined by Finix, not ChildWise.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                6.2 Processing fees.
              </strong>{" "}
              Payment processing fees are disclosed at{" "}
              <Link
                href="/payment-fees"
                className="text-teal font-semibold hover:underline"
              >
                childwisesoftware.com/payment-fees
              </Link>{" "}
              and in your merchant agreement. Card processing uses interchange
              cost-plus pricing customized per center; ACH (pay-by-bank)
              transactions carry a flat disclosed per-transaction fee. Your exact
              rates are stated in your merchant agreement and within the Services.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                6.3 Fee pass-through.
              </strong>{" "}
              Where permitted by law and card network rules, Customer may elect
              within the Services to pass card processing fees through to payers.
              Customer is solely responsible for ensuring that any surcharge or
              fee pass-through complies with applicable law, card network rules,
              and required disclosures to parents and guardians.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                6.4 Payouts, chargebacks, and disputes.
              </strong>{" "}
              Settlement timing, payouts, reserves, chargebacks, refunds, and
              disputes are governed by your merchant agreement with Finix.
              Customer is responsible for chargebacks and reversals on its
              transactions.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                6.5 Underwriting information.
              </strong>{" "}
              Information and documents you provide during merchant onboarding are
              collected by and submitted directly to Finix. ChildWise does not
              receive or store your underwriting documents.
            </p>
          </TermsSection>

          <TermsSection title="7. Customer Data">
            <p>
              <strong className="text-ink font-semibold">7.1 Ownership.</strong>{" "}
              As between the parties, Customer owns all data submitted to the
              Services by Customer, its staff, and the families it serves
              (&ldquo;Customer Data&rdquo;), including enrollment records,
              attendance data, and information about children and their families.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">7.2 Our license.</strong>{" "}
              You grant ChildWise a limited license to host, process, transmit,
              and display Customer Data solely to provide and support the
              Services, to comply with law, and as otherwise permitted by our{" "}
              <Link
                href="/privacy"
                className="text-teal font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                7.3 Children&rsquo;s information.
              </strong>{" "}
              The Services are used by childcare organizations to manage records
              that include information about minors. Customer is responsible for
              obtaining any consents required from parents or guardians for the
              collection and use of this information through the Services.
              ChildWise processes children&rsquo;s information only on
              Customer&rsquo;s behalf and does not use it for advertising.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">7.4 Security.</strong>{" "}
              We maintain administrative, technical, and physical safeguards
              designed to protect Customer Data, including encryption in transit,
              role-based access controls, and monitoring. No system is perfectly
              secure, and we cannot guarantee absolute security.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                7.5 Data return and deletion.
              </strong>{" "}
              Upon written request following termination, we will make Customer
              Data available for export in a commonly used format for thirty (30)
              days, after which we may delete it, subject to legal retention
              requirements and routine backups.
            </p>
          </TermsSection>

          <TermsSection title="8. Acceptable Use">
            <p>
              You agree not to: (a) use the Services in violation of applicable
              law, including childcare licensing regulations; (b) attempt to
              access another customer&rsquo;s data; (c) interfere with or disrupt
              the Services; (d) reverse engineer, copy, or resell the Services;
              (e) upload malicious code; or (f) use the Services to send unlawful
              or deceptive communications. We may suspend accounts engaged in
              prohibited conduct.
            </p>
          </TermsSection>

          <TermsSection title="9. Intellectual Property">
            <p>
              ChildWise and its licensors own all rights in the Services,
              including software, design, and documentation. These Terms grant you
              a limited, non-exclusive, non-transferable right to use the Services
              during your subscription. Feedback you provide may be used by
              ChildWise without restriction or obligation.
            </p>
          </TermsSection>

          <TermsSection title="10. Term and Termination">
            <p>
              <strong className="text-ink font-semibold">10.1 Term.</strong>{" "}
              These Terms apply for as long as you maintain an account or use the
              Services. Subscriptions renew monthly unless your agreement states
              otherwise.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                10.2 Termination by Customer.
              </strong>{" "}
              You may cancel your subscription effective at the end of the
              then-current billing period by written notice or through the
              Services.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">
                10.3 Termination by ChildWise.
              </strong>{" "}
              We may terminate or suspend the Services for material breach of
              these Terms that remains uncured fifteen (15) days after notice, for
              non-payment as described above, or immediately where required by law
              or to protect the Services or other customers.
            </p>
            <p className="mt-4">
              <strong className="text-ink font-semibold">10.4 Effect.</strong>{" "}
              Upon termination, your right to use the Services ends. Sections
              concerning fees owed, Customer Data return, intellectual property,
              disclaimers, limitation of liability, indemnification, and governing
              law survive.
            </p>
          </TermsSection>

          <TermsSection title="11. Disclaimers">
            <p className="uppercase text-[13.5px] leading-[1.8]">
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as
              available.&rdquo; To the maximum extent permitted by law, ChildWise
              disclaims all warranties, express or implied, including
              merchantability, fitness for a particular purpose, and
              non-infringement. ChildWise does not warrant that the Services will
              be uninterrupted or error-free. The Services are a management tool
              and do not constitute legal, tax, licensing, or compliance advice;
              Customer remains solely responsible for its compliance with
              childcare licensing and other applicable requirements.
            </p>
          </TermsSection>

          <TermsSection title="12. Limitation of Liability">
            <p className="uppercase text-[13.5px] leading-[1.8]">
              To the maximum extent permitted by law: (a) neither party will be
              liable for indirect, incidental, special, consequential, or punitive
              damages, or for lost profits, revenue, or data; and (b)
              ChildWise&rsquo;s total aggregate liability arising out of or
              relating to the Services will not exceed the fees paid by Customer
              to ChildWise in the twelve (12) months preceding the event giving
              rise to the claim. These limits do not apply to Customer&rsquo;s
              payment obligations or to liability that cannot be limited by law.
            </p>
          </TermsSection>

          <TermsSection title="13. Indemnification">
            <p>
              Customer will defend and indemnify ChildWise against third-party
              claims arising from (a) Customer Data, (b) Customer&rsquo;s use of
              the Services in violation of these Terms or applicable law, or (c)
              Customer&rsquo;s fee pass-through or billing practices toward
              parents and guardians.
            </p>
          </TermsSection>

          <TermsSection title="14. Modifications to These Terms">
            <p>
              We may update these Terms from time to time. For material changes,
              we will provide at least thirty (30) days&rsquo; notice by email or
              in-app notice. Continued use of the Services after the effective
              date constitutes acceptance. The &ldquo;Last updated&rdquo; date
              above reflects the current version.
            </p>
          </TermsSection>

          <TermsSection title="15. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of the State of Michigan,
              without regard to conflict-of-laws principles. The parties consent
              to the exclusive jurisdiction and venue of the state and federal
              courts located in Michigan for any dispute not subject to another
              agreed resolution process.
            </p>
          </TermsSection>

          <TermsSection title="16. General">
            <p>
              These Terms, together with any order form and the{" "}
              <Link
                href="/privacy"
                className="text-teal font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              , are the entire agreement between the parties regarding the
              Services and supersede prior discussions. If any provision is
              unenforceable, the remainder stays in effect. Neither party is
              liable for delays caused by events beyond its reasonable control.
              You may not assign these Terms without our consent, except to a
              successor of your business; we may assign to an affiliate or
              successor. Notices to ChildWise should be sent to the contact
              address below.
            </p>
          </TermsSection>

          <TermsSection title="17. Contact">
            <div className="p-5 bg-page-bg border border-border rounded-[13px]">
              <div className="text-[13px] text-slate/70 uppercase tracking-wider font-bold mb-2">
                ChildWise Software LLC
              </div>
              <div className="text-ink">
                <a
                  href="mailto:support@childwisesoftware.com"
                  className="text-teal font-semibold hover:underline"
                >
                  support@childwisesoftware.com
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
          </TermsSection>

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

function TermsSection({
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
