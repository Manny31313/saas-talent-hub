import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Banknote, Send, CheckCircle2, Upload } from "lucide-react";
import { roles } from "@/data/roles";
import Navbar from "@/components/landing/Navbar";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const RoleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const role = roles.find((r) => r.id === id);

  if (!role) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold mb-4">Role not found</h1>
            <Button variant="hero" asChild>
              <Link to="/open-roles">View all roles</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      linkedin: formData.get("linkedin"),
      coverLetter: formData.get("coverLetter"),
    };

    // ============================================================
    // ATS INTEGRATION PLACEHOLDER
    // Uncomment and configure when ready to connect your ATS.
    //
    // const ATS_CONFIG = {
    //   ashby: {
    //     apiEndpoint: "https://api.ashbyhq.com/candidate.create",
    //     apiKey: "",  // Set via environment variable
    //   },
    //   greenhouse: {
    //     apiEndpoint: "https://harvest.greenhouse.io/v1/candidates",
    //     apiKey: "",  // Set via environment variable
    //   },
    // };
    //
    // async function submitToATS(candidate: typeof data, resume: File | null) {
    //   const atsFormData = new FormData();
    //   atsFormData.append("candidate", JSON.stringify(candidate));
    //   if (resume) atsFormData.append("resume", resume);
    //
    //   const response = await fetch(ATS_CONFIG.ashby.apiEndpoint, {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${ATS_CONFIG.ashby.apiKey}`,
    //     },
    //     body: atsFormData,
    //   });
    //   return response.json();
    // }
    // ============================================================

    const resumeNote = resumeFile ? `%0A%0AResume attached: ${resumeFile.name}` : "";
    const mailtoLink = `mailto:keezerholdingsllc@gmail.com?subject=Application for ${role.title} - ${data.name}&body=Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone || "N/A"}%0ALinkedIn: ${data.linkedin || "N/A"}%0ARole: ${role.title}%0ACompany: ${role.company}%0A%0ACover Letter:%0A${data.coverLetter}${resumeNote}`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setResumeFile(null);
      toast({
        title: "Application submitted!",
        description: `Thanks for applying for ${role.title}. We'll be in touch soon.`,
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-6">
          <div className="mb-6">
            <Link
              to="/open-roles"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Open Roles
            </Link>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl">
            {/* Role details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium bg-primary/10 text-primary border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
                  {role.title}
                </h1>
                <p className="text-lg text-primary font-heading font-medium">{role.company}</p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {role.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {role.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Banknote className="w-4 h-4" /> {role.salary}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold mb-3">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold mb-3">Responsibilities</h2>
                <ul className="space-y-2">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {role.requirements.map((item) => (
                    <li key={item} className="flex gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Application form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-6 sm:p-8 sticky top-24">
                <h2 className="font-heading text-xl font-semibold mb-1">Apply Now</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Submit your details and we'll be in touch within 48 hours.
                </p>

                <form onSubmit={handleApply} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input
                      required
                      name="name"
                      placeholder="Your full name"
                      maxLength={100}
                      className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      required
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      maxLength={255}
                      className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input
                      name="phone"
                      placeholder="(optional)"
                      type="tel"
                      maxLength={20}
                      className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">LinkedIn URL</label>
                    <Input
                      name="linkedin"
                      placeholder="https://linkedin.com/in/yourprofile"
                      type="url"
                      maxLength={300}
                      className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Upload Resume</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start gap-2 bg-secondary/50 border-border text-muted-foreground"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-4 h-4" />
                      {resumeFile ? resumeFile.name : "Choose file (PDF, DOC, DOCX)"}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Why are you a great fit?
                    </label>
                    <Textarea
                      required
                      name="coverLetter"
                      placeholder="Tell us briefly why you're interested and what makes you stand out..."
                      maxLength={1000}
                      rows={4}
                      className="bg-secondary/50 border-border placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-base py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleDetail;
