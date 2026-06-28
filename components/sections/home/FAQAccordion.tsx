import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { faqItems, type FAQItem } from '@/content/faq'

type FAQAccordionProps = {
  items?: FAQItem[]
}

export function FAQAccordion({ items = faqItems }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-left text-white/90">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-white/60 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
