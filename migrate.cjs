const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'pages', 'Services.jsx');
const portfolioPath = path.join(__dirname, 'src', 'pages', 'Portfolio.jsx');

let servicesCode = fs.readFileSync(servicesPath, 'utf8');
let portfolioCode = fs.readFileSync(portfolioPath, 'utf8');

// 1. Extract 7 sections from Services.jsx
const startMarker = '{/* Qualitative Research Section */}';
const endMarker = '{/* Bottom CTA Banner */}';

const startIndex = servicesCode.indexOf(startMarker);
const endIndex = servicesCode.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Markers not found in Services.jsx");
    process.exit(1);
}

const sevenSections = servicesCode.substring(startIndex, endIndex);

// 2. Replace Filter Tabs and Portfolio Grid in Portfolio.jsx with the 7 sections
const portStartMarker = '{/* Filter Tabs */}';
const portEndMarker = '{/* Bottom CTA Banner */}';

const portStartIndex = portfolioCode.indexOf(portStartMarker);
const portEndIndex = portfolioCode.indexOf(portEndMarker);

if (portStartIndex === -1 || portEndIndex === -1) {
    console.error("Markers not found in Portfolio.jsx");
    process.exit(1);
}

portfolioCode = portfolioCode.substring(0, portStartIndex) + sevenSections + portfolioCode.substring(portEndIndex);
portfolioCode = portfolioCode.replace('Glimpses of our field research and survey projects', 'Explore our comprehensive campaign strategies and solutions.');

fs.writeFileSync(portfolioPath, portfolioCode);

// 3. Build the new alternating Services List Section
const newServicesList = `      {/* Services List Section */}
      <section className="py-20 px-6 lg:px-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
          
          {/* Row 1: Ground Surveys */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-12 border-b border-gray-100">
            {/* Icon Box */}
            <div className="w-32 h-32 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-[28px] font-extrabold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                Ground Surveys
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-[15px] md:text-[16px]">
                We conduct door-to-door and booth-level surveys to understand voter sentiment, local issues, and development priorities with accuracy.
              </p>
              <ul className="space-y-3.5">
                {['Household level interaction', 'Booth level coverage', 'Real-time data collection'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[220px] md:h-[280px]">
                <img src="/work-1.png" alt="Ground Surveys" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Row 2: Political Research */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 pb-12 border-b border-gray-100">
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[220px] md:h-[280px]">
                <img src="/work-2.png" alt="Political Research" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Icon Box */}
            <div className="w-32 h-32 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-[28px] font-extrabold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </span>
                Political Research
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-[15px] md:text-[16px]">
                In-depth research on constituency dynamics, caste combinations, issue mapping, and electoral trends.
              </p>
              <ul className="space-y-3.5">
                {['Constituency Analysis', 'Caste & Community Mapping', 'Issue & Development Analysis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3: Voter Data Analysis */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Icon Box */}
            <div className="w-32 h-32 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-[28px] font-extrabold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
                  </svg>
                </span>
                Voter Data Analysis
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-[15px] md:text-[16px]">
                We convert raw data into meaningful insights to help you understand voters better and plan effectively.
              </p>
              <ul className="space-y-3.5">
                {['Data Processing', 'Sentiment Analysis', 'Insightful Reporting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[220px] md:h-[280px]">
                <img src="/work-4.png" alt="Voter Data Analysis" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>
`;

servicesCode = servicesCode.substring(0, startIndex) + newServicesList + servicesCode.substring(endIndex);

fs.writeFileSync(servicesPath, servicesCode);
console.log("Migration complete!");
