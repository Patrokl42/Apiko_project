import React from 'react';

export function withSuspence (
  BaseComponent,
  ErrorComponent = () => <div>Not Found</div>,
  FallbackComponent = () => <div>Loading...</div>
) {
  function WithSuspence (props) {
    return (
      <ErrorBoundry
        rootProps={props}
        ErrorComponent={ErrorComponent}
      >
        <Suspense fallback={<FallbackComponent />}>
          <BaseComponent {...props}/>
        </Suspense>
      </ErrorBoundry>
    );
  }

  return WithSuspence;
};
