export default function ShowData({ savedData }) {
  return (
    <>
      {savedData && (
        <div>
          <h2>Saved Data:</h2>
          <pre>{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
