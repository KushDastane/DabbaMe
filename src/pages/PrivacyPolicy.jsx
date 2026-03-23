const policySections = [
  {
    title: "Information We Collect",
    body:
      "DabbaMe may collect account details, contact information, order history, kitchen onboarding details, payment references, and device usage data needed to operate the platform safely and reliably."
  },
  {
    title: "How We Use Information",
    body:
      "We use collected information to process orders, verify kitchens, improve customer support, personalize the product experience, maintain security, and communicate important updates about the service."
  },
  {
    title: "Sharing and Protection",
    body:
      "We only share data with trusted service providers, delivery or payment partners, and legal authorities when required. We apply reasonable safeguards to protect user and kitchen information from misuse or unauthorized access."
  },
  {
    title: "Your Choices",
    body:
      "Users may request profile updates, correction of inaccurate information, or account deletion subject to operational and legal obligations. Questions about privacy can be directed to the DabbaMe support team."
  }
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fffdf7] px-5 py-16 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-900"
        >
          Back to Home
        </a>

        <div className="mt-8 rounded-[36px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            This page outlines how DabbaMe collects, uses, and protects information for
            customers, kitchens, and partners using the platform.
          </p>

          <div className="mt-10 space-y-8">
            {policySections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-stone-950">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-stone-600">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
