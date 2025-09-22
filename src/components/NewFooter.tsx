export function NewFooter() {
  return (
    <footer className="py-20" style={{ backgroundColor: '#0F172A' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Three lines of messaging */}
          <div className="space-y-6">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Built in Tamil Nadu for people who want better choices.
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              From real kitchens, not fast-food factories.
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Transparent. Fresh. No gimmicks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}