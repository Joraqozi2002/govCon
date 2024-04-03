import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div style={{ height: '100vh' }} className={props.color}>
    {props.children}
  </div>
);

export { Background };
