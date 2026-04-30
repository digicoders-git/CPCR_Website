import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function R({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const v = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>{children}</motion.div>
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-white pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Floating Gray Dot (Top Left) */}
        <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-gray-200 hidden md:block" />

        <div className="w-full relative z-10">
          <div className="flex flex-col items-center text-center w-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center w-full mb-12 md:mb-16"
            >
              {/* Horizontal line from left extending to the center */}
              <div className="flex-1 h-[1px] bg-gray-200" />
              
              {/* Centered Breadcrumbs */}
              <div className="flex items-center gap-3 px-8">
                <Link to="/" className="text-[12px] font-medium tracking-[0.25em] uppercase text-black hover:text-gray-500 transition-colors">HOME</Link>
                <span className="text-gray-600 text-[12px]">/</span>
                <span className="text-[12px] tracking-[0.25em] uppercase text-gray-500 font-medium">PRIVACY POLICY</span>
              </div>
              
              {/* Invisible right spacer to maintain perfect center alignment */}
              <div className="flex-1" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight"
            >
              <span className="font-medium text-black">Privacy</span> <span className="font-light text-gray-600">Policy</span>
            </motion.h1>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-20">
          <R>
            <div className="relative pl-10 md:pl-16">
              {/* Floating Gray Dot next to the first paragraph */}
              <div className="absolute left-0 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
              
              <div className="space-y-8 text-[17px] text-gray-500 font-light">
                <p className="text-[15px] tracking-wide mb-8">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                
                <p className="leading-loose">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                
                <p className="leading-loose">
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              <div className="mt-16 space-y-8 relative">
                <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Interpretation and Definitions</h2>
                
                <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Interpretation</h3>
                
                <p className="leading-loose text-[17px] text-gray-500 font-light">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <div className="pt-8 relative">
                  {/* Floating Gray Dot for Definitions section */}
                  <div className="absolute -left-10 md:-left-16 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
                  
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Definitions</h3>
                  
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-8">
                    For the purposes of this Privacy Policy:
                  </p>

                  <ul className="space-y-6 text-[17px] text-gray-500 font-light list-none pl-0">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Account</span> means a unique account created for You to access our Service or parts of our Service.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Centre for Political and Civic Research, Lucknow Uttar Pradesh, India.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Cookies</span> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Country</span> refers to: Lucknow, India
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Personal Data</span> is any information that relates to an identified or identifiable individual.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Service</span> refers to the Website.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Service Provider</span> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Usage Data</span> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Website</span> refers to CPCR, accessible from <a href="https://cpcr.in/" target="_blank" rel="noreferrer" className="text-black font-medium hover:text-red-600 transition-colors">https://cpcr.in/</a>
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Collecting and Using Your Personal Data */}
              <div className="mt-20 relative">
                <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Collecting and Using Your Personal Data</h2>
                
                <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Types of Data Collected</h3>
                
                <h4 className="text-[17px] font-medium text-black mb-4">Personal Data</h4>
                
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>

                <div className="relative">
                  {/* Floating Dot */}
                  <div className="absolute -left-10 md:-left-16 top-2 w-4 h-4 rounded-full bg-gray-200" />
                  <ul className="space-y-4 text-[17px] text-gray-500 font-light list-none pl-0 mb-8">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      Email address
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      First name and last name
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      Usage Data
                    </li>
                  </ul>
                </div>

                <h4 className="text-[17px] font-medium text-black mb-4 mt-12">Usage Data</h4>
                
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-8">
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                </p>

                <div className="relative">
                  {/* Floating Dot */}
                  <div className="absolute -left-10 md:-left-16 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
                  <h4 className="text-[17px] font-medium text-black mb-4 mt-12">Tracking Technologies and Cookies</h4>
                  
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                  </p>

                  <ul className="space-y-6 text-[17px] text-gray-500 font-light list-none pl-0 mb-8">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Cookies or Browser Cookies.</span> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Web Beacons.</span> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </li>
                  </ul>

                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <span className="text-black font-medium hover:text-red-600 cursor-pointer transition-colors">TermsFeed website</span> article.
                  </p>
                  
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    We use both Session and Persistent Cookies for the purposes set out below:
                  </p>

                  <ul className="space-y-6 text-[17px] text-gray-500 font-light list-none pl-0 mb-8">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Necessary / Essential Cookies</span> Type: Session Cookies Administered by: Us Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Cookies Policy / Notice Acceptance Cookies</span> Type: Persistent Cookies Administered by: Us Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Functionality Cookies</span> Type: Persistent Cookies Administered by: Us Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                    </li>
                  </ul>

                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-8">
                    For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Use of Your Personal Data */}
              <div className="mt-16 relative">
                <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Use of Your Personal Data</h3>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  The Company may use Personal Data for the following purposes:
                </p>

                <ul className="space-y-6 text-[17px] text-gray-500 font-light list-none pl-0 mb-8">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">To provide and maintain our Service</span>, including to monitor the usage of our Service.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">To manage Your Account:</span> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">For the performance of a contract:</span> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">To contact You:</span> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">To provide You</span> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">To manage Your requests:</span> To attend and manage Your requests to Us.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">For business transfers:</span> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                  </li>
                  <li className="relative pl-6">
                    {/* Floating Dot on this specific list item */}
                    <div className="absolute -left-10 md:-left-16 top-2 w-4 h-4 rounded-full bg-gray-200" />
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">For other purposes:</span> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                  </li>
                </ul>

                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6 mt-8">
                  We may share Your personal information in the following situations:
                </p>

                <ul className="space-y-6 text-[17px] text-gray-500 font-light list-none pl-0 mb-8">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">With Service Providers:</span> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">For business transfers:</span> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">With Affiliates:</span> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="font-medium text-gray-500">With business partners:</span> We may share Your information with Our business partners to offer You certain products, services or promotions.
                  </li>
                </ul>
              </div>

              {/* Retention, Transfer, Delete */}
              <div className="mt-16 space-y-12 relative">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Retention of Your Personal Data</h3>
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  <p className="leading-loose text-[17px] text-gray-500 font-light">
                    The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                  </p>
                </div>

                <div className="relative">
                  {/* Floating Dot */}
                  <div className="absolute -left-10 md:-left-16 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Transfer of Your Personal Data</h3>
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  </p>
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                  </p>
                  <p className="leading-loose text-[17px] text-gray-500 font-light">
                    The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Delete Your Personal Data</h3>
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                  </p>
                  <p className="leading-loose text-[17px] text-gray-500 font-light">
                    Our Service may give You the ability to delete certain information about You from within the Service.
                  </p>
                </div>
              </div>

              {/* Disclosure & Security */}
              <div className="mt-20 relative">
                <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Disclosure of Your Personal Data</h2>
                
                <h4 className="text-[17px] font-medium text-black mb-4">Business Transactions</h4>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-8">
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>

                <div className="relative">
                  {/* Floating Dot */}
                  <div className="absolute -left-10 md:-left-16 top-2 w-4 h-4 rounded-full bg-gray-200" />
                  <h4 className="text-[17px] font-medium text-black mb-4">Law enforcement</h4>
                  <p className="leading-loose text-[17px] text-gray-500 font-light mb-8">
                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                  </p>
                </div>

                <h4 className="text-[17px] font-medium text-black mb-4">Other legal requirements</h4>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-6">
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <ul className="space-y-4 text-[17px] text-gray-500 font-light list-none pl-0 mb-16">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    Comply with a legal obligation
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    Protect and defend the rights or property of the Company
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    Prevent or investigate possible wrongdoing in connection with the Service
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    Protect the personal safety of Users of the Service or the public
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                    Protect against legal liability
                  </li>
                </ul>

                <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Security of Your Personal Data</h2>
                <p className="leading-loose text-[17px] text-gray-500 font-light mb-16">
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>

                <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Children's Privacy</h2>
              </div>
            </div>
          </R>
        </div>
      </section>
    </main>
  )
}
