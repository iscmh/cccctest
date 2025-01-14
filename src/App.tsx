import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Instagram, Youtube, Twitch, Share2, Check, Link, DollarSign, ShoppingBag, Megaphone, Target, Newspaper, Store, Gift, Loader2, ArrowRight } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function App() {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full py-4 sm:py-6 px-4 sm:px-6 md:px-12 flex items-center justify-between bg-white border-b border-neutral-200 relative z-10">
        <div className="flex items-center gap-2">
          <img src="https://i.ibb.co/1dssWGr/Untitled-design-52.png" alt="Counted Logo" className="h-8 sm:h-10" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-neutral-600">
          <button 
            onClick={() => scrollToSection('monetization')}
            className="text-sm font-medium hover:text-neutral-900 transition-colors"
          >
            Monetization Methods
          </button>
          <button 
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            onClick={() => scrollToSection('contact-form')}
          >
            Make It Count
            <ChevronRight size={16} />
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section py-8 sm:py-16 px-4 sm:px-6 md:px-12 relative">
          <div className="world-map-bg" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-4 sm:mb-6 leading-[1.1]">
                  Building and <span className="text-blue-600">Launching Products</span> for Your <span className="text-blue-600">Audience</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We generated over $1,500,000 in revenue by creating unique digital products for creators, and they didn't spend a penny.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 max-w-xs sm:max-w-none mx-auto">
                  <button 
                    className="shimmer-button bg-blue-600 text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto"
                    onClick={() => scrollToSection('contact-form')}
                  >
                    Make It Count
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    className="bg-white text-blue-600 px-7 py-3 rounded-md text-sm font-medium border border-blue-200 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                    onClick={() => navigate('/signin')}
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 sm:mt-12">
                  <Instagram size={24} className="text-neutral-400 hover:text-neutral-600 transition-colors" />
                  <Youtube size={24} className="text-neutral-400 hover:text-neutral-600 transition-colors" />
                  <Twitch size={24} className="text-neutral-400 hover:text-neutral-600 transition-colors" />
                </div>
              </div>

              <div className="flex-1 w-full max-w-[90vw] sm:max-w-[400px] px-4 sm:px-0">
                <div className="relative">
                  <div className="macos-window bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200">
                    <div className="window-header bg-[#f6f6f6] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 border-b border-neutral-200">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FEBC2E] border border-[#D89D24]"></div>
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                      </div>
                    </div>
                    <div className="window-content p-4 sm:p-6 relative min-h-[300px]">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          {/* Product Name and Price */}
                          <div className="form-group">
                            <label className="text-sm text-neutral-600 mb-1 block">Product Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-md border border-neutral-200"
                                value="Digital Marketing Mastery"
                                readOnly
                              />
                              <Check size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="text-sm text-neutral-600 mb-1 block">Price (USD)</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-md border border-neutral-200"
                                value="$49.99"
                                readOnly
                              />
                              <Check size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                            </div>
                          </div>

                          {/* Revenue Share */}
                          <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Share2 size={16} className="text-neutral-500" />
                                <span className="text-neutral-600 text-sm">50/50 Revenue Share</span>
                              </div>
                              <span className="text-emerald-600 text-sm font-medium">Fair Split</span>
                            </div>
                            <div className="flex gap-2 h-2">
                              <div className="flex-1 bg-emerald-500 rounded-l-full"></div>
                              <div className="flex-1 bg-blue-500 rounded-r-full"></div>
                            </div>
                            <div className="flex justify-between mt-2 text-xs">
                              <span className="text-emerald-600">Creator: 50%</span>
                              <span className="text-blue-600">Counted: 50%</span>
                            </div>
                          </div>

                          {/* Website Link in Bio */}
                          <div className="form-group">
                            <label className="text-sm text-neutral-600 mb-1 block">Website</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-md border border-neutral-200"
                                value="www.countedproduct.com"
                                readOnly
                              />
                              <Link size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            </div>
                          </div>

                          {/* Sales and Revenue */}
                          <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-neutral-600 text-sm">Total Revenue</span>
                              <div className="text-emerald-600 text-lg font-medium">
                                $3,750
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white rounded-lg p-3 border border-neutral-200">
                                <div className="text-xs text-neutral-500 mb-1">Your Share</div>
                                <div className="text-emerald-600 font-medium">
                                  $1,875
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-3 border border-neutral-200">
                                <div className="text-xs text-neutral-500 mb-1">Sales</div>
                                <div className="text-blue-600 font-medium">75</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 md:px-12 bg-neutral-50" id="monetization">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8 text-center">Monetization Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Digital Products</h3>
                <p className="text-neutral-600">We help you create and launch your own digital products: courses, ebooks, communities, and more. From concept to launch, we manage the process, ensuring your product aligns with your brand and provides value to your followers, creating a scalable, long-term revenue stream.</p>
              </div>

              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Sponsorships</h3>
                <p className="text-neutral-600">We secure sponsorships that match your brand and audience. From outreach to contract management, we handle every detail, ensuring that each partnership is authentic, resonates with your followers, and consistently generates revenue.</p>
              </div>

              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Clipping Deals</h3>
                <p className="text-neutral-600">We set up clipping deals where you earn $5+ for every 10,000 views your videos receive when they include specific sounds, effects, or watermarks. These deals are based on including certain branded elements in your content, such as a particular sound, an effect, or a watermark that is tied to a campaign.</p>
              </div>

              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                  <Newspaper className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Newsletters</h3>
                <p className="text-neutral-600">We create and manage a newsletter for you, monetizing it with partnerships that earn you $1+ per subscriber through your referral. We also secure sponsors and sell digital products through the newsletter. As your newsletter reaches 100K+ subscribers, we position the newsletter for a profitable exit. </p>
              </div>

              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-commerce Brands</h3>
                <p className="text-neutral-600">We create and launch your own branded products through our proven dropshipping model. From product selection to fulfillment, we handle everything while you focus on promotion. Your audience gets quality products with your brand, and you earn without inventory hassles.</p>
              </div>

              <div className="monetization-card p-6 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Free Products</h3>
                <p className="text-neutral-600">We create premium products that your audience can access for free by completing simple tasks. Through our partnerships with offer owners, you earn revenue each time your followers complete actions like app downloads or sign-ups. Your audience gets valuable content at no cost while you generate income from our partner network.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 md:px-12 bg-white" id="contact-form">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8 text-center">Work with the best on the market</h2>
            
            <div className="bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-blue-100/50 hover:border-blue-200">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="form-group">
                    <label className="text-sm font-medium text-neutral-700 mb-2 block">
                      What is your name?
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-sm font-medium text-neutral-700 mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;