import { Shield, AlertTriangle } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-astra-lime" />
            </div>
            <h1 className="font-display font-bold text-4xl text-astra-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-astra-text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Template Notice */}
          <div className="astra-card p-6 mb-8 border-yellow-500/20 bg-yellow-500/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-200/80">
                  <strong>Template Notice:</strong> This is a template privacy policy. 
                  If you are the bot owner, please review and customize this policy to 
                  accurately reflect your data practices. This template should not be 
                  used as-is for a production bot.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                1. Information We Collect
              </h2>
              <div className="prose prose-invert prose-sm max-w-none">
                <p className="text-astra-text-muted leading-relaxed">
                  AstraBot collects the following types of information:
                </p>
                <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                  <li>
                    <strong>Server Settings:</strong> Configuration data such as prefix settings, 
                    enabled features, channel preferences, and role assignments.
                  </li>
                  <li>
                    <strong>User Data:</strong> Discord user IDs, usernames, and avatar URLs 
                    for features like leveling, warnings, and user information commands.
                  </li>
                  <li>
                    <strong>Moderation Logs:</strong> Records of moderation actions including 
                    kicks, bans, timeouts, and warnings with associated user IDs and reasons.
                  </li>
                  <li>
                    <strong>Message Metadata:</strong> For logging features, we store message 
                    IDs, author IDs, channel IDs, and timestamps. Message content is only stored 
                    if explicitly enabled by server administrators.
                  </li>
                  <li>
                    <strong>Leveling Data:</strong> XP points, message counts, and level 
                    progress for users in servers with leveling enabled.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We use the collected information solely to provide and improve AstraBot's services:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>To operate bot features and respond to commands</li>
                <li>To maintain moderation logs and user records</li>
                <li>To calculate and display leveling progress</li>
                <li>To provide server administrators with configuration options</li>
                <li>To troubleshoot issues and improve bot performance</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                3. Data Storage and Security
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We take reasonable measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Data is stored in secure databases with access controls</li>
                <li>We do not sell or share your data with third parties</li>
                <li>We do not use your data for advertising purposes</li>
                <li>Access to data is limited to authorized bot administrators</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                4. Data Retention
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We retain data for as long as necessary to provide our services:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Server settings are retained until the bot is removed from the server</li>
                <li>Moderation logs are retained for 90 days by default (configurable)</li>
                <li>Leveling data is retained indefinitely unless manually reset</li>
                <li>Upon bot removal, server-specific data is scheduled for deletion within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                5. Your Rights
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                Server administrators have the following rights regarding their data:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Request a copy of your server's data</li>
                <li>Request deletion of your server's data</li>
                <li>Modify or correct inaccurate data</li>
                <li>Export leveling and moderation data</li>
              </ul>
              <p className="text-astra-text-muted leading-relaxed mt-3">
                To exercise these rights, contact us through our support server.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                AstraBot interacts with Discord's API in accordance with Discord's 
                Terms of Service and Privacy Policy. We do not integrate with other 
                third-party services that would access your server data.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify 
                users of significant changes through our support server or via the bot's 
                status message. Continued use of AstraBot after changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                8. Contact Us
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, 
                please join our support server or contact us at privacy@astrabot.gg.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
