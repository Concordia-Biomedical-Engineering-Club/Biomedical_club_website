import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const Sponsorship = () => {
  const { sponsorship } = config;
  const {
    hero,
    about,
    benefits,
    tiers,
    comparisonTable,
    pastSponsors,
    contact,
  } = sponsorship;

  // Helper function to render table cell value
  const renderTableCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      if (value) {
        return <span className="text-primary text-xl">✓</span>;
      }
      return <span className="text-gray-400">—</span>;
    }
    return <span className="text-gray-700">{value}</span>;
  };

  return (
    <div id="sponsorship" className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="tiers"
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {hero.primaryAction.text}
            </Link>
            <a
              href={hero.secondaryAction.href}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-colors"
            >
              {hero.secondaryAction.text}
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hero.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {about.highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">{about.mission}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Activities
                </h3>
                <p className="text-gray-600">{about.activities}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Impact
                </h3>
                <p className="text-gray-600">{about.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {benefits.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section id="tiers" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the partnership level that&apos;s right for your
              organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const tierColors = {
                platinum: {
                  bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
                  text: 'text-white',
                  border: 'border-yellow-500',
                  badge: 'bg-yellow-500 text-gray-900',
                  button: 'bg-yellow-500 text-gray-900 hover:bg-yellow-400',
                },
                gold: {
                  bg: 'bg-white',
                  text: 'text-gray-900',
                  border: 'border-yellow-500',
                  badge: 'bg-yellow-500 text-white',
                  button: 'bg-yellow-500 text-white hover:bg-yellow-600',
                },
                silver: {
                  bg: 'bg-white',
                  text: 'text-gray-900',
                  border: 'border-gray-400',
                  badge: 'bg-gray-400 text-white',
                  button: 'bg-gray-500 text-white hover:bg-gray-600',
                },
                bronze: {
                  bg: 'bg-white',
                  text: 'text-gray-900',
                  border: 'border-orange-600',
                  badge: 'bg-orange-600 text-white',
                  button: 'bg-orange-600 text-white hover:bg-orange-700',
                },
              };

              const colors = tierColors[tier.color as keyof typeof tierColors];

              return (
                <div
                  key={index}
                  className={`${colors.bg} ${
                    colors.text
                  } rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${
                    colors.border
                  } ${
                    tier.popular ? 'ring-4 ring-yellow-500 ring-opacity-50' : ''
                  }`}
                >
                  {tier.color === 'gold' && (
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 text-white text-center font-semibold">
                      {tier.name}
                    </div>
                  )}
                  {tier.color === 'silver' && (
                    <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-4 text-white text-center font-semibold">
                      {tier.name}
                    </div>
                  )}
                  {tier.color === 'bronze' && (
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 text-white text-center font-semibold">
                      {tier.name}
                    </div>
                  )}

                  {tier.color === 'platinum' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        {tier.badge && (
                          <span
                            className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold`}
                          >
                            {tier.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {(tier.color === 'gold' ||
                    tier.color === 'silver' ||
                    tier.color === 'bronze') &&
                    tier.badge && (
                      <div className="px-6 pt-4">
                        <span
                          className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold inline-block`}
                        >
                          {tier.badge}
                        </span>
                      </div>
                    )}

                  <div
                    className={`${
                      tier.color !== 'platinum' ? 'pt-2' : ''
                    } px-6 pb-6`}
                  >
                    <div className="text-3xl font-bold mb-6">{tier.price}</div>

                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className={`w-5 h-5 ${
                              tier.color === 'platinum'
                                ? 'text-yellow-500'
                                : 'text-primary'
                            } mt-1 mr-3 flex-shrink-0`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className={`${
                              tier.color === 'platinum'
                                ? 'text-gray-100'
                                : 'text-gray-700'
                            } text-sm`}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:${contact.email}?subject=Sponsorship Inquiry - ${tier.name} Tier`}
                      className={`block w-full text-center px-6 py-3 rounded-md font-semibold ${colors.button} transition-colors`}
                    >
                      Choose {tier.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {comparisonTable.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Bronze
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Silver
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">Gold</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Platinum
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {row.benefit}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderTableCell(row.bronze)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderTableCell(row.silver)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderTableCell(row.gold)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderTableCell(row.platinum)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {pastSponsors.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {pastSponsors.description}
          </p>

          {pastSponsors.sponsors.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-12">
              <p className="text-gray-500 text-lg">
                Join us as our first sponsors and help shape the future of
                biomedical engineering education!
              </p>
              <p className="text-gray-400 mt-4">
                Your company logo will be prominently featured here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {pastSponsors.sponsors.map((sponsor: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 w-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-100 mb-6">{contact.subtitle}</p>
          <p className="text-gray-100 mb-8">{contact.description}</p>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              {contact.formTitle}
            </h3>
            <div className="text-gray-100 mb-6">
              For sponsorship inquiries, please contact us at:
            </div>
            <a
              href={`mailto:${contact.email}?subject=Sponsorship Inquiry`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contact.email}?subject=Sponsorship Inquiry`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </a>
            <Link
              to="tiers"
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors cursor-pointer"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
