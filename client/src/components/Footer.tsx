import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CraftyFunnel. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                data-testid="link-privacy"
              >
                Privacy
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                data-testid="link-terms"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">Information We Collect</h3>
              <p className="text-muted-foreground">
                We collect information you provide directly to us when you use our services, 
                including your name, email address, company information, and any other information 
                you choose to provide through our contact forms.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">How We Use Your Information</h3>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you about our services, and to respond to your inquiries.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell or share your personal information with third parties except as 
                necessary to provide our services or as required by law.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                hello@craftyfunnel.com.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms of Use</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing and using CraftyFunnel's services, you accept and agree to be bound 
                by the terms and provisions of this agreement.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Use of Services</h3>
              <p className="text-muted-foreground">
                You agree to use our services only for lawful purposes and in accordance with 
                these Terms. You agree not to use our services in any way that violates any 
                applicable federal, state, local, or international law or regulation.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Intellectual Property</h3>
              <p className="text-muted-foreground">
                The service and its original content, features, and functionality are owned by 
                CraftyFunnel and are protected by international copyright, trademark, patent, 
                trade secret, and other intellectual property laws.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                In no event shall CraftyFunnel be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to 
                use the service.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Questions about the Terms of Use should be sent to us at hello@craftyfunnel.com.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
