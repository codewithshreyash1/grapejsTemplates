import React from 'react';

// Import all templates
import Screen1 from '../../templates/screen1-template-gallery.jsx';
import Screen2 from '../../templates/screen2-onboarding-tour-v2.jsx';
import Screen3 from '../../templates/screen3-editor-master-frame.jsx';
import Screen4 from '../../templates/screen4-section-sidebar.jsx';
import Screen5 from '../../templates/screen5-text-editing.jsx';
import Screen6 from '../../templates/screen6-image-swap.jsx';
import Screen7 from '../../templates/screen7-theme-panel-v2.jsx';
import Screen8 from '../../templates/screen8-canvas-states.jsx';
import Screen9 from '../../templates/screen9-preview-mode-v2.jsx';
import Screen10 from '../../templates/screen10-publish-flow.jsx';
import Screen11 from '../../templates/screen11-layer2-unlock.jsx';
import Screen12 from '../../templates/screen12-block-library.jsx';
import Screen13 from '../../templates/screen13-block-insertion.jsx';
import Screen14 from '../../templates/screen14-block-inspector-v2.jsx';
import Screen15 from '../../templates/screen15-element-palette-inspector.jsx';
import Screen16 from '../../templates/screen16-drag-feedback.jsx';
import Screen17 from '../../templates/screen17-layer3-unlock.jsx';
import Screen18 from '../../templates/screen18-grapejs-layout.jsx';
import Screen19 from '../../templates/screen19-shared-blocks.jsx';
import Screen20 from '../../templates/screen20-page-switcher.jsx';
import Screen21 from '../../templates/screen21-dynamic-data.jsx';
import Screen22 from '../../templates/screen22-autosave.jsx';
import Screen23 from '../../templates/screen22-23-autosave-undo.jsx';
import Screen24 from '../../templates/screen24-language-toggle.jsx';
import Screen25 from '../../templates/screen25-version-history.jsx';

const templates = [
  { name: 'Screen 1: Template Gallery', Component: Screen1 },
  { name: 'Screen 2: Onboarding Tour', Component: Screen2 },
  { name: 'Screen 3: Editor Master Frame', Component: Screen3 },
  { name: 'Screen 4: Section Sidebar', Component: Screen4 },
  { name: 'Screen 5: Text Editing', Component: Screen5 },
  { name: 'Screen 6: Image Swap', Component: Screen6 },
  { name: 'Screen 7: Theme Panel', Component: Screen7 },
  { name: 'Screen 8: Canvas States', Component: Screen8 },
  { name: 'Screen 9: Preview Mode', Component: Screen9 },
  { name: 'Screen 10: Publish Flow', Component: Screen10 },
  { name: 'Screen 11: Layer2 Unlock', Component: Screen11 },
  { name: 'Screen 12: Block Library', Component: Screen12 },
  { name: 'Screen 13: Block Insertion', Component: Screen13 },
  { name: 'Screen 14: Block Inspector', Component: Screen14 },
  { name: 'Screen 15: Element Palette Inspector', Component: Screen15 },
  { name: 'Screen 16: Drag Feedback', Component: Screen16 },
  { name: 'Screen 17: Layer3 Unlock', Component: Screen17 },
  { name: 'Screen 18: GrapeJS Layout', Component: Screen18 },
  { name: 'Screen 19: Shared Blocks', Component: Screen19 },
  { name: 'Screen 20: Page Switcher', Component: Screen20 },
  { name: 'Screen 21: Dynamic Data', Component: Screen21 },
  { name: 'Screen 22: Autosave', Component: Screen22 },
  { name: 'Screen 23: Autosave Undo', Component: Screen23 },
  { name: 'Screen 24: Language Toggle', Component: Screen24 },
  { name: 'Screen 25: Version History', Component: Screen25 },
];

export default function TemplatesGallery() {
  return (
    <div style={{ padding: 24 }}>
      <h1>All Templates Preview</h1>
      {templates.map(({ name, Component }, idx) => (
        <div key={name} style={{ border: '1px solid #ccc', margin: 16, padding: 16 }}>
          <h2>{name}</h2>
          <Component />
        </div>
      ))}
    </div>
  );
}
