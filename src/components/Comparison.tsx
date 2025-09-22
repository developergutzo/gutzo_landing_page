import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Comparison() {
  return (
    <section className="bg-white py-20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Other Apps */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="text-center py-4 text-white font-bold text-lg" style={{ backgroundColor: '#B94C3C' }}>
              OTHER APPS
            </div>
            
            {/* Visual */}
            <div className="p-8">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659352153675-5eea8e06befd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMHBlcnNvbiUyMGp1bmslMjBmb29kJTIwcGl6emF8ZW58MXx8fHwxNzU4NTIwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stressed person surrounded by junk food"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="text-center font-bold text-gray-800 text-lg">
                Temptation. Guilt. Regret.
              </p>
            </div>
          </div>

          {/* Card 2: Gutzo App */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#E8F5E9' }}>
            {/* Header */}
            <div className="text-center py-4 text-white font-bold text-lg" style={{ backgroundColor: '#157A34' }}>
              GUTZO APP
            </div>
            
            {/* Visual */}
            <div className="p-8">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584079822534-ded0800c615a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMGhlYWx0aHklMjBzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc1ODUyMDI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy person with healthy salad"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="text-center font-bold text-gray-800 text-lg">
                Clarity. Fit. Glow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}