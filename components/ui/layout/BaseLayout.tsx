
import { FunctionComponent } from "react";
import Navbar from "../navbar";

const BaseLayout: FunctionComponent = ({ children }) => {

  return (
    <>
      <Navbar />
      <div className="py-17 bg-gray-800 overflow-hidden min-h-screen">
        <div className="max-w-8xl mx-auto px-4 space-y-8 sm:px-6 lg:px-60">
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout;

//max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8