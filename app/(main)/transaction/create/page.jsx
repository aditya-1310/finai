// ... existing code ...
export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();
  // Await searchParams before accessing
  const editId = await searchParams?.edit;

  let initialData = null;
  if (editId) {
    // ... rest of the code
  }
  // ... existing code ...
}