"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function WorkflowError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Empty className="max-w-md">
        <EmptyHeader>
          <EmptyMedia variant="icon" className="size-14 rounded-xl">
            <AlertTriangle className="size-6" />
          </EmptyMedia>
          <EmptyTitle className="text-2xl">Something went wrong</EmptyTitle>
          <EmptyDescription className="text-base">
            We couldn&apos;t load this workflow. Try again in a moment.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="secondary" size="lg" onClick={() => retry()}>
            Try again
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
