const RealTimeOverlay = () => {
  return (
    <div className="fixed top-17 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl p-4">
      <div
        className="p-3 rounded-md text-white text-sm text-center backdrop-blur-sm animate-gradient-move"
        style={{
          background:
            'linear-gradient(90deg, rgba(17, 95, 158, 0.7), rgba(51, 168, 141, 0.6), rgba(17, 95, 158, 0.7))',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        AI가 레시피를 분석중이에요…
      </div>
    </div>
  );
};

export default RealTimeOverlay;
