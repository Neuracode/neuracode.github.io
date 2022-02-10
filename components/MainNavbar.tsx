import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

interface DropdownProps {
  name: string;
  options: {
    name: string;
    href: string;
  }[];
}

interface DropdownItemProps {
  options: {
    name: string;
    href: string;
  };
}

const Dropdown: React.FC<DropdownProps> = ({ name, options }) => {
  const DropdownItem: React.FC<DropdownItemProps> = ({ options }) => {
    return (
      <Link href={options.href} passHref={true}>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {options.name}
            </button>
          )}
        </Menu.Item>
      </Link>
    );
  };

  const items = [];
  for (let i = 0; i < options.length; i++) {
    items.push(<DropdownItem options={options[i]} key={i} />);
  }

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {name}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-slate-100 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
          <div className='px-1 py-1 '>{items}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const MainNavbar: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect bg='light' variant='light' id='navbar' expand='lg' >
        <Container>
          <Link href='/' passHref={true}>
            <Navbar.Brand className='d-flex flex-row'>
              <Image src='/neuracode_logo.png' width='36' height='30' alt='neuracode_logo' />
              Neuracode
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link>
              <Dropdown
                name='Courses'
                options={[
                  {
                    name: 'Overview',
                    href: '/courses/overview',
                  },
                  {
                    name: 'Intro to AI',
                    href: '/courses/intro-to-ai',
                  },
                  {
                    name: 'Intro to Python',
                    href: '/courses/intro-to-python',
                  },
                  {
                    name: 'Intro to Scikit-Learn',
                    href: '/courses/intro-to-scikit-learn',
                  },
                  {
                    name: 'Intro to Keras',
                    href: '/courses/intro-to-keras',
                  },
                  {
                    name: 'Intro to Tensorflow',
                    href: '/courses/intro-to-tensorflow',
                  },
                ]}
              />
            </Nav.Link>
            <Nav.Link>
              <Dropdown
                name='About'
                options={[
                  {
                    name: 'Team',
                    href: '/about/team',
                  },
                  {
                    name: 'Contact',
                    href: '/about/contact',
                  },
                  {
                    name: 'FAQ',
                    href: '/about/faq',
                  },
                  {
                    name: 'Donate',
                    href: '/about/donate',
                  },
                  {
                    name: 'Privacy Policy',
                    href: '/about/privacy-policy',
                  },
                ]}
              />
            </Nav.Link>
            <Nav.Link>
              <Dropdown
                name='Join'
                options={[
                  {
                    name: 'Overview',
                    href: '/join/overview',
                  },
                  {
                    name: 'Apply',
                    href: 'https://forms.gle/7dYev7Agaj36qsHe8',
                  },
                ]}
              />
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
