/* eslint-disable @next/next/no-img-element */

import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FunctionComponent } from "react";

type WalletbarProps = {
  isLoading: boolean;
  isInstalled: boolean;
  account: string | undefined;
  connect: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Walletbar: FunctionComponent<WalletbarProps> = ({
  isInstalled,
  isLoading,
  connect,
  account
}) => {

  if (isLoading) {
    return (
      <div>
        <button
          onClick={() => { }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Loading ...
        </button>
      </div>
    )
  }

  if (account) {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 hover:ring-2 hover:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-12 w-12 rounded-full"
              src="/images/default_user_image.png"
              alt=""
            />
          </Menu.Button>
        </div>

        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {() => (
              <button
                disabled={true}
                className="disabled:text-gray-200 text-s block px-3 pt-1 bg-gray-700">
                <b>Account:</b>  {`0x${account[2]}${account[3]}${account[4]}....${account.slice(-4)}`}
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/profile">
                <a
                  className={classNames(active ? 'bg-white' : '', 'bg-gray-700 block px-3 py-0 pt-4 pb-3 text-m text-white hover:bg-gray-400 hover:text-black  text-m font-medium')}
                >
                  <b>Your Profile</b>
                </a>
              </Link>

            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    )
  }

  if (isInstalled) {
    return (
      <div>
        <button
          onClick={() => {
            connect()
          }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect Wallet
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button
          onClick={() => {
            window.open('https://metamask.io', '_ blank');
          }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          No Wallet
        </button>
      </div>
    )
  }
}

export default Walletbar;
