'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowIcon } from './Icons';
import { ItemProps } from './constants';
import classNames from 'classnames';

const Item = ({ item }: { item: ItemProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = `cv-item-${item.company.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = `cv-content-${item.company.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <li className="group relative border-b border-app-400 py-6 leading-normal">
      <button
        id={buttonId}
        className="flex h-auto w-full items-start gap-4 pr-8 text-left transition-all duration-300 md:gap-8"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} details for ${item.company} position`}
      >
        <span
          className="relative flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-md shadow-xl transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105"
          style={{
            background: item.bgColor,
          }}
          aria-hidden="true"
        >
          <Image
            src={item.logo}
            alt=""
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </span>

        <section className="flex max-w-lg flex-1 flex-col">
          <strong className="text-lg">
            {item.company} ({item.location})
          </strong>
          <span className="text-md font-medium text-app-200">
            {item.position}, {item.type}
          </span>
          <span className="text-sm font-medium text-app-200">{item.date}</span>
        </section>

        <span
          className={classNames(
            'absolute right-0 top-[25px] flex-shrink-0 transition-transform duration-300 md:right-[10px]',
            {
              'rotate-180': isOpen,
            },
          )}
          aria-hidden="true"
        >
          <ArrowIcon />
        </span>
      </button>

      <div
        id={contentId}
        className={classNames('overflow-hidden transition-all duration-300', {
          'max-h-auto opacity-100': isOpen,
          'max-h-0 opacity-0': !isOpen,
        })}
        aria-hidden={!isOpen}
      >
        <div className="pl-20 pt-4 md:pl-24">
          <span className="block text-sm font-semibold text-app-100">
            Tools
          </span>
          <span className="max-w-md text-sm text-app-200">{item.techs}</span>

          <span className="block pt-4 text-sm font-semibold text-app-100">
            Work & Responsibilities
          </span>
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {item.responsibilities.map((responsibility, index) => (
              <li
                key={`${item.company}-responsibility-${index}`}
                className="relative pl-4 text-sm text-app-200"
              >
                <span
                  className="absolute left-0 text-app-100 opacity-50"
                  aria-hidden="true"
                >
                  •
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Item;
