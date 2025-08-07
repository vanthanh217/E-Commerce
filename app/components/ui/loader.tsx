const Loader = () => {
  return (
    <div className="relative grid h-[72px] w-[72px] place-items-center">
      <div
        className="animate-spinner absolute h-full w-full bg-[radial-gradient(farthest-side,#1182fc_92%,transparent)] bg-[position:50%_0,50%_100%,100%_50%,0_50%] bg-no-repeat"
        style={{ backgroundSize: '17.3px 17.3px' }}
      ></div>
      <div
        className="animate-spinner-linear absolute m-[5.8px] h-[calc(100%-11.6px)] w-[calc(100%-11.6px)] bg-[radial-gradient(farthest-side,#1182fc_92%,transparent)] bg-[position:50%_0,50%_100%,100%_50%,0_50%] bg-no-repeat"
        style={{ backgroundSize: '11.5px 11.5px' }}
      ></div>
      <style>{`
        @keyframes spinner {
          100% {
            transform: rotate(0.5turn);
          }
        }

        .animate-spinner {
          animation: spinner 0.8s infinite;
        }

        .animate-spinner-linear {
          animation: spinner 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
