# Amaranta Cup
## Spec-Driven Development Document

**Version:** 1.0  
**Language:** Spanish  
**Status:** Baseline specification for the current static site

## 1. Product Goal

Create a warm, elegant storefront for Amaranta Cup that presents artisanal pastry and gourmet charcuterie, then guides visitors toward placing an order through WhatsApp or exploring the catalog.

## 2. Users

- People planning a celebration or special gathering.
- Visitors looking for custom cakes, desserts, or gourmet boards.
- Returning customers who need a direct path to contact and order.

## 3. Scope

### In scope

- Responsive home page at `index.html`.
- Brand header with logo, navigation, and primary order action.
- Hero section with the core value proposition and two calls to action.
- Pastry specialty section with product image, benefits, and actions.
- Navigation to pastry, charcuterie, about, and contact pages.
- Accessible semantic structure, alternative text, keyboard-focusable links, and responsive layouts.

### Out of scope

- Shopping cart, checkout, payment processing, or user accounts.
- Product inventory and real-time availability.
- CMS or server-side data storage.
- Replacing the linked subpages unless separately requested.

### Known dependencies

The current home page references these future pages, which are not present in this workspace yet:

- `Charcuteria/Amaranta Cup - Desarrollar - GoDaddy Airo AI Builder.html`
- `Pasteleria/Amaranta Cup - Desarrollar - GoDaddy Airo AI Builder.html`
- `nosotros/Amaranta Cup - Desarrollar - GoDaddy Airo AI Builder.html`
- `Amaranta Cup -Contacto.html`

## 4. Functional Requirements

| ID | Requirement | Acceptance criteria |
| --- | --- | --- |
| FR-01 | Show the Amaranta Cup brand in the header. | The logo is visible, links to `index.html`, and has meaningful alternative text. |
| FR-02 | Provide primary navigation. | Links are available for Inicio, Charcutería, Pastelería, Nosotros, and Contacto; Inicio identifies the current page. |
| FR-03 | Make ordering prominent. | The header and hero include a clear order action that reaches the contact flow. |
| FR-04 | Communicate the offer immediately. | The first viewport includes the pastry/charcuterie category, celebration-focused headline, supporting copy, and catalog/order actions. |
| FR-05 | Present the pastry specialty. | The specialty section includes an image, descriptive copy, three concrete benefits, and two actions. |
| FR-06 | Preserve valid navigation. | Every internal link points to an existing target in the delivered project or is explicitly marked as a future dependency. |
| FR-07 | Add the information from attached image to the bottom of the index.html page and use the following images: tortaCelebracion, cajaTrufas y minicakeBloom  |
| FR-08 | Add the information from attached image to the bottom of the index.html page and use the following images: tablaRose, tablaDuo y cajaPetit  |

## 5. Non-Functional Requirements

| ID | Requirement | Acceptance criteria |
| --- | --- | --- |
| NFR-01 | Responsive behavior. | Header, navigation, hero actions, and specialty content remain usable at widths from 320px upward without horizontal page overflow. |
| NFR-02 | Visual direction. | Use the existing warm cream, berry, and coral palette; maintain strong contrast between text and backgrounds. |
| NFR-03 | Performance. | Use local image assets, avoid unnecessary JavaScript, and keep the home page functional with JavaScript disabled. |
| NFR-04 | Accessibility. | Use landmarks and heading hierarchy, descriptive image alt text, visible focus states, and link text that describes the destination. |
| NFR-05 | Maintainability. | Keep styles scoped to clear component-like classes, store all CSS in external `.css` files, prohibit `<style>` blocks and `style` attributes in HTML, and preserve the static HTML architecture unless requirements expand. |

## 6. Content Requirements

- Primary language: Spanish.
- Brand name: `Amaranta Cup`.
- Hero message: artisanal sweetness for celebrations.
- Supporting offer: handcrafted desserts, custom cakes, and gourmet charcuterie boards.
- Pastry benefits: quality ingredients, personalization, and elegant ready-to-serve presentation.
- Calls to action: order/contact and view catalog/pastry.

## 7. User Flow

1. Visitor lands on the home page.
2. Visitor understands the offer from the hero.
3. Visitor chooses `Pedir por WhatsApp` / `Pedir ahora` or `Ver catálogo`.
4. Visitor can browse the linked category or information pages.
5. Visitor reaches the contact flow to complete the order conversation.

## 8. Definition Of Done

- All functional and non-functional acceptance criteria pass.
- Internal navigation targets are present and load without broken links.
- The page is checked at desktop and mobile widths.
- Images load from `img/` with meaningful alt text.
- All styles are loaded from external `.css` files; no `<style>` blocks or `style` attributes exist in HTML.
- No horizontal overflow or overlapping interactive elements is present.
- A final browser smoke test confirms hero and specialty-section actions work.

## 9. Verification Checklist

- [ ] Open `index.html` in a browser.
- [ ] Check the header and hero at desktop width.
- [ ] Check the layout at 320px, 768px, and 1280px widths.
- [ ] Activate each navigation link.
- [ ] Activate both hero actions and both specialty actions.
- [ ] Confirm the logo and pastry image load.
- [ ] Confirm keyboard focus is visible on links.
- [ ] Confirm there is no horizontal scrolling on mobile.
