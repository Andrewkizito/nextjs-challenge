const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh_-_96px)] max-sm:h-[calc(100vh_-_64px)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 max-md:text-2xl">
          404 - Not Found
        </h1>
        <p className="text-lg text-gray-600 max-md:text-sm">
          Sorry, the page you are looking
          <br /> for might not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
