"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, X, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { UploadDropzone } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"

interface ImageUploadProps {
  value?: string
  onChange: (file: string | undefined) => void
  error?: string
  disabled?: boolean
  className?: string
}

export function ImageUpload({ value, onChange, error, disabled, className }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter();

  const handleRemove = () => {
    onChange(undefined)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }
  const formatFileSize = (bytes:number | null) => {
    if(!bytes) {
      return "0 bytes"
    }
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-sm font-medium">Agency Logo</Label>

      <div className="space-y-4">
        {/* Upload Area */}
        <div
          className={cn(
            "relative border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer",
            "hover:border-primary/50 hover:bg-muted/50",
            error ? "border-destructive" : "border-border",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          {preview ? (
            <div className="relative">
              <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden bg-muted">
                <Image src={preview || "/placeholder.svg"} alt="Logo preview" fill className="object-cover" />
              </div>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemove()
                }}
                disabled={disabled}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : 
          <UploadDropzone
            endpoint={"agencyLogo"}
            appearance={{
              label: { color: "#FFFFF" },
              allowedContent: { color: "#FFFFFF" },
            }}
            onClientUploadComplete={(res) => {
              onChange(res?.[0]?.ufsUrl);
              router.refresh();
              setFileName(res?.[0]?.name)
              setFileSize(res?.[0]?.size)
              setPreview(res?.[0]?.ufsUrl)
            }}
          />
          }
        </div>

        {/* File Info */}
        {value && (
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <ImageIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{fileName}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(fileSize)}</p>
              </div>
            </div>
            <Button type="button" variant="ghost" size="sm" onClick={handleRemove} disabled={disabled}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
