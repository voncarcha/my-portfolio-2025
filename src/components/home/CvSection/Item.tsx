'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowIcon } from './Icons';
import { ItemProps } from './constants';
import classNames from 'classnames';

const Item = ({ item }: { item: ItemProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="group relative border-b border-app-400 py-6 leading-normal"
      key={item.company}
    >
      <button className="h-[100px] z-10 absolute w-full top-0 left-0" onClick={() => setIsOpen(!isOpen)}></button>
      <article className="flex h-auto w-full flex-col gap-4 text-left transition-all duration-300 md:flex-row md:gap-8">
        <span
          className="relative flex h-[64px] w-[64px] items-center justify-center rounded-md shadow-xl transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105"
          style={{
            background: item.bgColor,
          }}
        >
          <Image
            src={item.logo}
            alt={item.company}
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </span>
        <section className="flex max-w-lg flex-1 flex-col ">
          <strong className="text-lg">
            {item.company} ({item.location})
          </strong>
          <span className="text-md font-medium text-app-200">
            {item.position}, {item.type}
          </span>
          <span className="text-sm font-medium text-app-200">{item.date}</span>

          <div
            className={classNames('', {
              block: isOpen,
              hidden: !isOpen,
            })}
          >
            <span className="block pt-4 text-sm font-semibold text-app-100">
              Tools
            </span>
            <span className="max-w-md text-sm text-app-200">{item.techs}</span>
            <span className="block pt-4 text-sm font-semibold text-app-100">
              Work & Responsibilities
            </span>
            <ul className="flex flex-col gap-1 pt-2">
              {item.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="relative text-sm text-app-200"
                >
                  <span className="absolute left-[-10px] text-app-100 opacity-50">
                    •
                  </span>{' '}
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <span
          className={classNames('absolute right-[10px] top-[10px]', {
            'rotate-180': isOpen,
          })}
        >
          <ArrowIcon />
        </span>
      </article>
    </li>
  );
};

export default Item;
