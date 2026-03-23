const termsSections = [
  {
    title: "Platform Use",
    body:
      "DabbaMe provides a platform connecting customers with home kitchens. By using the service, users agree to provide accurate information and to use the platform only for lawful ordering, kitchen operations, and related communication."
  },
  {
    title: "Orders and Payments",
    body:
      "Customers are responsible for reviewing menus, pricing, and delivery details before placing an order. Kitchens are responsible for fulfilling accepted orders accurately and maintaining transparent availability and pricing."
  },
  {
    title: "Kitchen Responsibilities",
    body:
      "Kitchen partners must maintain required hygiene, food quality, and licensing standards applicable in their region. DabbaMe may suspend listings that create trust, quality, or safety concerns."
  },
  {
    title: "Liability and Changes",
    body:
      "DabbaMe may update product features, pricing structures, and these terms from time to time. Continued use of the platform after updates means the revised terms apply unless prohibited by law."
  }
];

function TermsConditions() {
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
            Terms & Conditions
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            These terms describe the expectations, responsibilities, and platform rules for
            customers and kitchen partners using DabbaMe.
          </p>

          <div className="mt-10 space-y-8">
            {termsSections.map((section) => (
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

export default TermsConditions;
