import { FileText, AlertTriangle } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-astra-lime" />
            </div>
            <h1 className="font-display font-bold text-4xl text-astra-text mb-4">
              Terms of Service
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
                  <strong>Template Notice:</strong> This is a template Terms of Service. 
                  If you are the bot owner, please review and customize these terms to 
                  match your specific requirements and jurisdiction. This template should 
                  not be used as-is for a production bot.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                By inviting AstraBot to your Discord server or using any of its features, 
                you agree to be bound by these Terms of Service. If you do not agree to 
                these terms, you may not use the bot. These terms apply to all users, 
                including server administrators and members.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                2. Description of Service
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                AstraBot is a Discord bot that provides moderation tools, utility commands, 
                fun features, logging capabilities, and leveling systems for Discord servers. 
                The bot is provided "as is" and we reserve the right to modify, suspend, or 
                discontinue any part of the service at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                3. Discord Terms of Service
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                Your use of AstraBot must comply with Discord's Terms of Service, Community 
                Guidelines, and Developer Policy. We reserve the right to terminate access 
                for any user or server found to be in violation of Discord's terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                4. Prohibited Uses
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                You may not use AstraBot for any of the following purposes:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Harassment, abuse, or intimidation of any individual or group</li>
                <li>Distribution of illegal content or promotion of illegal activities</li>
                <li>Spamming, raiding, or disrupting other Discord servers</li>
                <li>Attempting to exploit bugs or vulnerabilities in the bot</li>
                <li>Using the bot to collect user data without consent</li>
                <li>Reselling or redistributing premium features without authorization</li>
                <li>Automating abuse of command rate limits</li>
                <li>Impersonating the bot or its developers</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                5. Server Administrator Responsibilities
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                Server administrators who invite AstraBot are responsible for:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Configuring appropriate permissions for the bot</li>
                <li>Ensuring bot usage complies with their server's rules and Discord's ToS</li>
                <li>Monitoring and moderating their community's use of bot features</li>
                <li>Notifying us of any security issues or bugs</li>
                <li>Obtaining necessary consents for data collection in their jurisdiction</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                6. Premium Subscriptions
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                Premium features are available through paid subscriptions:
              </p>
              <ul className="list-disc list-inside text-astra-text-muted space-y-2 mt-3">
                <li>Subscriptions are billed on a monthly basis</li>
                <li>One subscription covers all servers where you have Manage Server permission</li>
                <li>You may cancel your subscription at any time</li>
                <li>Refunds are provided within 7 days of purchase if requested</li>
                <li>We reserve the right to modify pricing with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                To the maximum extent permitted by law, AstraBot and its developers shall 
                not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use or inability to use the service. 
                This includes but is not limited to loss of data, server disruptions, or 
                moderation decisions made using the bot.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                8. Termination
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We reserve the right to terminate or suspend access to AstraBot for any 
                user or server at our sole discretion, without prior notice, for conduct 
                that we believe violates these Terms or is harmful to other users, us, or 
                third parties. You may remove the bot from your server at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                We may modify these Terms of Service at any time. We will notify users of 
                significant changes through our support server. Continued use of AstraBot 
                after changes constitutes acceptance of the updated terms. It is your 
                responsibility to review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                10. Governing Law
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws 
                of the jurisdiction in which the bot operator is established, without 
                regard to its conflict of law provisions. Any disputes arising under these 
                terms shall be resolved through good faith negotiation.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-astra-text mb-4">
                11. Contact Information
              </h2>
              <p className="text-astra-text-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us 
                through our support server or at legal@astrabot.gg.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
