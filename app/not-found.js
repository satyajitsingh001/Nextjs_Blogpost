import Link from "next/link";

export default function Notfound() {
  return (
    <section className="py-10 bg-white font-serif">
      <div className=" mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <div
              className="bg-center h-[400px] bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              }}
            >
              <h1 className="text-[80px]">404</h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl">Look like you're lost</h3>
              <p className="mb-4">
                The page you are looking for is not available!
              </p>
              <Link
                href="/"
                className="text-white bg-gray-600 py-2 px-4 inline-block mt-5 hover:bg-green-400"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
