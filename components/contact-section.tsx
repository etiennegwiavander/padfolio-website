"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { sendEmail } from "@/app/actions/send-email"
import { Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [status, setStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await sendEmail(formData)
      setStatus(result)
      setDialogOpen(true)

      if (result.success) {
        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          message: "",
        })
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
      setDialogOpen(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        {/* Google Maps */}
        <div className="w-full h-[300px] mb-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d302073.310610331!2d10.151894997169913!3d5.863612016413977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1733401442945!5m2!1sen!2scm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md h-32"
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Status Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{status?.success ? "Success!" : "Error"}</DialogTitle>
            <DialogDescription>{status?.message}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

