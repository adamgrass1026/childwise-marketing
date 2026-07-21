import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Processing Fees — ChildWise",
  description:
    "Disclosure of payment processing fees for tuition and other payments accepted through the ChildWise platform, provided through our payments partner Finix.",
  alternates: {
    canonical: "/payment-fees",
  },
};

export default function PaymentFeesPage() {
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
            Fee Disclosure
          </div>
          <h1 className="font-heading text-[clamp(34px,4.5vw,52px)] font-semibold text-white leading-[1.1] tracking-tight">
            Payment Processing Fees
          </h1>
          <p className="text-[15px] text-white/60 mt-4">
            Last updated: July 21, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-[760px] mx-auto px-9 py-16 font-body text-[15px] text-slate leading-[1.75]">
          <p className="text-[17px] text-ink leading-[1.7] mb-10">
            This page discloses the fees that apply when childcare centers accept
            tuition and other payments through the ChildWise platform. Payment
            processing is provided through our payments partner,{" "}
            <strong className="font-semibold">Finix Payments, Inc.</strong> and its
            banking partners (&ldquo;Finix&rdquo;).
          </p>

          {/* Fee summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <div className="p-6 bg-page-bg border border-border rounded-[13px]">
              <div className="text-[13px] text-slate/70 uppercase tracking-wider font-bold mb-2">
                Card Payments
              </div>
              <div className="font-heading text-[30px] font-semibold text-ink leading-none mb-1">
                Starting at 2.9%
              </div>
              <div className="text-[13px] text-slate mt-2 leading-[1.6]">
                Credit and debit cards, on interchange cost-plus pricing. Exact
                rates are customized per center and specified in your merchant
                agreement.
              </div>
            </div>
            <div className="p-6 bg-page-bg border border-border rounded-[13px]">
              <div className="text-[13px] text-slate/70 uppercase tracking-wider font-bold mb-2">
                ACH / Pay-by-Bank
              </div>
              <div className="font-heading text-[30px] font-semibold text-ink leading-none mb-1">
                $1.00
              </div>
              <div className="text-[13px] text-slate mt-2 leading-[1.6]">
                Flat fee per transaction. No percentage-based charge.
              </div>
            </div>
          </div>

          <FeeSection title="Card Processing">
            <p>
              Card payments (credit and debit) are priced on an{" "}
              <strong className="text-ink font-semibold">
                interchange cost-plus
              </strong>{" "}
              basis, starting at{" "}
              <strong className="text-ink font-semibold">2.9% per transaction</strong>.
              Interchange cost-plus means your center pays the actual wholesale cost
              set by the card networks (interchange), plus a fixed markup — rather
              than a single blended rate that can hide the underlying cost.
            </p>
            <p className="mt-4">
              Exact card processing rates are customized for each center based on
              factors such as card mix and processing volume, and are specified in
              each center&rsquo;s merchant agreement. Your center&rsquo;s precise
              rates are always available in your merchant agreement and within the
              ChildWise platform.
            </p>
          </FeeSection>

          <FeeSection title="ACH / Pay-by-Bank">
            <p>
              ACH (pay-by-bank) transactions are charged a flat fee of{" "}
              <strong className="text-ink font-semibold">
                $1.00 per transaction
              </strong>
              , regardless of the payment amount. There is no percentage-based fee
              on ACH payments.
            </p>
          </FeeSection>

          <FeeSection title="How Payment Processing Works">
            <p>
              Payment processing within ChildWise is provided through our payments
              partner, Finix. To accept payments, each center completes
              Finix&rsquo;s merchant onboarding and underwriting process and enters
              into a merchant agreement with Finix. Settlement timing, payouts,
              refunds, chargebacks, and disputes are governed by that merchant
              agreement.
            </p>
          </FeeSection>

          <FeeSection title="Passing Card Fees to Parents">
            <p>
              Centers may optionally choose, within ChildWise, to pass card
              processing fees through to parents and guardians at checkout. Where
              enabled, the applicable fee is disclosed to the payer before payment
              is completed. Centers are responsible for ensuring that any fee
              pass-through complies with applicable law and card network rules.
            </p>
          </FeeSection>

          <FeeSection title="Questions">
            <p>
              If you have questions about payment processing fees, please contact
              us:
            </p>
            <div className="mt-4 p-5 bg-page-bg border border-border rounded-[13px]">
              <div className="text-[13px] text-slate/70 uppercase tracking-wider font-bold mb-2">
                ChildWise
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
          </FeeSection>

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

function FeeSection({
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
