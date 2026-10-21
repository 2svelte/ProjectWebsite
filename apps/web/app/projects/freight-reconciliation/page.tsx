import { Card } from "@repo/ui";

export const metadata = { title: "Freight Reconciliation" };

export default function FreightReconciliation() {
  return (
    <>
      <h1>Freight 3-Way Reconciliation</h1>
      <p>
        An app that automatically matches freight documents so discrepancies
        are caught before payment.
      </p>
      <div className="grid">
        <Card title="What is 3-way reconciliation?">
          <p>
            Comparing the purchase order, the shipment/delivery record, and the
            carrier invoice to confirm all three agree.
          </p>
        </Card>
        <Card title="Details">
          <p>Add screenshots, tech stack and links to the repository here.</p>
        </Card>
      </div>
    </>
  );
}
