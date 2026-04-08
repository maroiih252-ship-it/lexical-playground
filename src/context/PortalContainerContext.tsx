/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {JSX} from 'react';

import {createContext, useContext, useRef} from 'react';

interface PortalContainerContextType {
  containerRef: React.RefObject;
}

const PortalContainerContext = createContext(null);

export function PortalContainerProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const containerRef = useRef(null);

  return (
    <PortalContainerContext.Provider value={{containerRef}}>
      {children}
      <div ref={containerRef} className="sipas-portal-container" />
    </PortalContainerContext.Provider>
  );
}

export function usePortalContainer(): HTMLElement {
  const ctx = useContext(PortalContainerContext);
  return ctx?.containerRef?.current || document.body;
}
