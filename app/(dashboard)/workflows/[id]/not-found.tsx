import Link from "next/link"
import { FileQuestion } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function WorkflowNotFound() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Empty className="max-w-md">
        <EmptyHeader>
          <EmptyMedia variant="icon" className="size-14 rounded-xl">
            <FileQuestion className="size-6" />
          </EmptyMedia>
          <EmptyTitle className="text-2xl">Workflow not found</EmptyTitle>
          <EmptyDescription className="text-base">
            This workflow doesn&apos;t exist or may have been deleted.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/">Back to dashboard</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
