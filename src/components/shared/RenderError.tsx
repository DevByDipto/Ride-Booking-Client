// utils/errorHandler.js
export const RenderError = (isError:boolean) => {
  if (!isError) return null;

  return (
    <div className="text-red-600 p-4 border border-red-300 rounded bg-red-50">
      Oops! Something went wrong.
      {/* dev mode only */}
      {/* {process.env.NODE_ENV === "development" && (
        <pre className="text-sm text-red-700">{JSON.stringify(error, null, 2)}</pre>
      )} */}
    </div>
  );
};
