/* @ds-bundle: {"format":4,"namespace":"DesignSystem_617e9b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/site/Accordion.jsx"},{"name":"ArticleCard","sourcePath":"components/site/ArticleCard.jsx"},{"name":"Banner","sourcePath":"components/site/Banner.jsx"},{"name":"CTABand","sourcePath":"components/site/CTABand.jsx"},{"name":"Container","sourcePath":"components/site/Container.jsx"},{"name":"Figure","sourcePath":"components/site/Figure.jsx"},{"name":"Grid","sourcePath":"components/site/Grid.jsx"},{"name":"Hero","sourcePath":"components/site/Hero.jsx"},{"name":"PricingCard","sourcePath":"components/site/PricingCard.jsx"},{"name":"Prose","sourcePath":"components/site/Prose.jsx"},{"name":"Quote","sourcePath":"components/site/Quote.jsx"},{"name":"Section","sourcePath":"components/site/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"EditorialArchive","sourcePath":"ui_kits/editorial/EditorialArchive.jsx"},{"name":"EditorialArticle","sourcePath":"ui_kits/editorial/EditorialArticle.jsx"},{"name":"EditorialHome","sourcePath":"ui_kits/editorial/EditorialHome.jsx"},{"name":"EditorialSubscribe","sourcePath":"ui_kits/editorial/EditorialSubscribe.jsx"},{"name":"MarketingContact","sourcePath":"ui_kits/marketing/MarketingContact.jsx"},{"name":"MarketingHome","sourcePath":"ui_kits/marketing/MarketingHome.jsx"},{"name":"MarketingPricing","sourcePath":"ui_kits/marketing/MarketingPricing.jsx"},{"name":"StudioDrafts","sourcePath":"ui_kits/studio/StudioDrafts.jsx"},{"name":"StudioEditor","sourcePath":"ui_kits/studio/StudioEditor.jsx"},{"name":"StudioSettings","sourcePath":"ui_kits/studio/StudioSettings.jsx"},{"name":"StudioShell","sourcePath":"ui_kits/studio/StudioShell.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"ef4335e7032e","components/core/Badge.jsx":"842b875d5378","components/core/Button.jsx":"7964004f04c1","components/core/Card.jsx":"2babdd5f157d","components/core/Divider.jsx":"03ab160379e7","components/core/Icon.jsx":"1f256f148f81","components/core/IconButton.jsx":"3b1c46669f99","components/core/Tag.jsx":"fde5445dce57","components/data/Stat.jsx":"aee475365740","components/data/Table.jsx":"26a65953b4d4","components/feedback/Callout.jsx":"d540be0b29d3","components/feedback/Dialog.jsx":"2316800c85ea","components/feedback/Toast.jsx":"18f76448b582","components/feedback/Tooltip.jsx":"9ebb09c9e357","components/forms/Checkbox.jsx":"e732de808487","components/forms/Field.jsx":"30eb3666744d","components/forms/Input.jsx":"d874da5e52da","components/forms/Radio.jsx":"b35986d19bde","components/forms/Select.jsx":"5fa0d4ee5cd1","components/forms/Switch.jsx":"c2fdba2fd7b1","components/forms/Textarea.jsx":"b43afa04e9fe","components/navigation/Breadcrumbs.jsx":"c6038aba3e7c","components/navigation/NavBar.jsx":"f625df26abed","components/navigation/Pagination.jsx":"6b2b7b5f3864","components/navigation/Tabs.jsx":"3e477231f075","components/site/Accordion.jsx":"34d033413044","components/site/ArticleCard.jsx":"3297801d40fb","components/site/Banner.jsx":"397141d6006a","components/site/CTABand.jsx":"4164abb754b7","components/site/Container.jsx":"2044f9b396d5","components/site/Figure.jsx":"9b2fa7912e84","components/site/Grid.jsx":"74836daf878a","components/site/Hero.jsx":"8502363d9727","components/site/PricingCard.jsx":"68a75287151b","components/site/Prose.jsx":"0fb6573774bd","components/site/Quote.jsx":"d67fcdb4d9fd","components/site/Section.jsx":"329c591782b8","components/site/SiteFooter.jsx":"46c7f1ab2d2f","preview-bundle.jsx":"22d02ea0e431","ui_kits/editorial/EditorialArchive.jsx":"79df0cc91cc9","ui_kits/editorial/EditorialArticle.jsx":"8f5b2c28f628","ui_kits/editorial/EditorialHome.jsx":"09741c97f9df","ui_kits/editorial/EditorialSubscribe.jsx":"70695937cb68","ui_kits/marketing/MarketingContact.jsx":"278bed7e415b","ui_kits/marketing/MarketingHome.jsx":"adc8becfe5d9","ui_kits/marketing/MarketingPricing.jsx":"ead77ee3f722","ui_kits/studio/StudioDrafts.jsx":"8755d112bd13","ui_kits/studio/StudioEditor.jsx":"a4bfb7945bd2","ui_kits/studio/StudioSettings.jsx":"ec99aef974fa","ui_kits/studio/StudioShell.jsx":"6959ed8117f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_617e9b = window.DesignSystem_617e9b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The CTU lockup: monogram, "FORO FEDERAL", and the expanded
   "Ciencia Tecnología Universidad" line. A supplied asset — never redrawn.
   Three crops of the same file, because the lower lines stop being legible
   as the mark shrinks: full (all three), compact (monogram + FORO FEDERAL,
   56px and up), mark (monogram only, for mastheads and small chrome). */
const RATIOS = {
  full: '1123 / 794',
  compact: '1123 / 655',
  mark: '1123 / 515'
};
function Logo({
  height = 56,
  variant = 'full',
  tone = 'ink',
  href,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: window.__CTU_LOGO_SRC__ || 'assets/logos/ctu-foro-federal.png',
    alt: "CTU \u2014 Foro Federal de Ciencia, Tecnolog\xEDa y Universidad",
    style: {
      height,
      width: 'auto',
      display: 'block',
      objectFit: 'cover',
      objectPosition: 'top',
      aspectRatio: RATIOS[variant],
      filter: tone === 'inverse' ? 'invert(1) brightness(1.9) saturate(0)' : undefined
    }
  });
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    style: {
      display: 'inline-flex',
      ...style
    }
  }), img) : /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      ...style
    }
  }), img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    color: 'var(--text-secondary)',
    border: 'var(--border)',
    bg: 'transparent'
  },
  accent: {
    color: 'var(--accent)',
    border: 'var(--accent)',
    bg: 'transparent'
  },
  success: {
    color: 'var(--success)',
    border: 'var(--success)',
    bg: 'transparent'
  },
  warning: {
    color: 'var(--warning)',
    border: 'var(--warning)',
    bg: 'transparent'
  },
  danger: {
    color: 'var(--danger)',
    border: 'var(--danger)',
    bg: 'transparent'
  },
  solid: {
    color: 'var(--on-accent)',
    border: 'transparent',
    bg: 'var(--accent-fill)'
  }
};
function Badge({
  tone = 'neutral',
  style,
  children,
  ...rest
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      font: 'var(--type-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-mono)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      color: t.color,
      border: '1px solid ' + t.border,
      background: t.bg,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  as = 'div',
  padding = 'md',
  interactive = false,
  inverse = false,
  style,
  children,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false)
  }, rest, {
    style: {
      background: inverse ? 'var(--bg-inverse)' : 'var(--surface-card)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      border: '1px solid ' + (interactive && over ? inverse ? 'var(--border-inverse)' : 'var(--border)' : 'transparent'),
      transition: 'border-color var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  orientation = 'horizontal',
  spacing = 'md',
  label,
  style,
  ...rest
}) {
  const gaps = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border)',
        margin: '0 ' + gaps[spacing],
        ...style
      }
    }));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        margin: gaps[spacing] + ' 0',
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: 'var(--border)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-eyebrow)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: 'var(--border)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      height: 1,
      background: 'var(--border)',
      margin: gaps[spacing] + ' 0',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};
function Icon({
  name,
  size = 'md',
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const url = `https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: px,
      height: px,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: '6px 12px',
  md: '10px 18px',
  lg: '14px 24px'
};
const FONT = {
  sm: 'var(--text-2xs)',
  md: 'var(--text-xs)',
  lg: 'var(--text-sm)'
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  as = 'button',
  style,
  children,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    font: 'var(--type-label)',
    fontSize: FONT[size],
    padding: PAD[size],
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : undefined,
    transition: 'var(--transition-color)',
    textDecoration: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--accent-fill)',
      color: 'var(--on-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      padding: PAD[size].split(' ')[0] + ' 0'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--on-accent)'
    }
  };
  const hover = {
    primary: {
      background: 'var(--accent-fill-hover)'
    },
    secondary: {
      background: 'var(--bg-secondary)'
    },
    ghost: {
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    },
    danger: {
      background: 'var(--danger-hover)'
    }
  };
  const [over, setOver] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false)
  }, rest, {
    style: {
      ...base,
      ...variants[variant],
      ...(over && !disabled ? hover[variant] : null),
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "sm"
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: "sm"
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  const variants = {
    ghost: {
      background: over ? 'var(--bg-secondary)' : 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    outline: {
      background: over ? 'var(--bg-secondary)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border)'
    },
    solid: {
      background: over ? 'var(--accent-fill-hover)' : 'var(--accent-fill)',
      color: 'var(--on-accent)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: BOX[size],
      height: BOX[size],
      border: '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-color)',
      ...variants[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 'md' : 'sm'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  onRemove,
  active = false,
  style,
  children,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--type-small)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--accent-wash)' : over ? 'var(--bg-secondary)' : 'transparent',
      color: active ? 'var(--accent)' : 'var(--text-secondary)',
      border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border)'),
      transition: 'var(--transition-color)',
      ...style
    }
  }), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      font: 'var(--type-small)',
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  label,
  value,
  note,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, value), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  zebra = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({}, rest, {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      textAlign: c.align || 'left',
      padding: '10px 12px',
      font: 'var(--type-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    style: {
      background: zebra && i % 2 === 1 ? 'var(--bg-secondary)' : 'transparent'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '12px',
      color: 'var(--text-secondary)',
      verticalAlign: 'top'
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  note: {
    color: 'var(--text-secondary)',
    rule: 'var(--border-strong)',
    icon: 'pencil-line'
  },
  accent: {
    color: 'var(--accent)',
    rule: 'var(--accent)',
    icon: 'quote'
  },
  success: {
    color: 'var(--success)',
    rule: 'var(--success)',
    icon: 'check'
  },
  warning: {
    color: 'var(--warning)',
    rule: 'var(--warning)',
    icon: 'triangle-alert'
  },
  danger: {
    color: 'var(--danger)',
    rule: 'var(--danger)',
    icon: 'octagon-alert'
  }
};
function Callout({
  tone = 'note',
  title,
  icon,
  style,
  children,
  ...rest
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: '1px solid ' + t.rule,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: "sm",
    color: t.color,
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: t.color,
      marginBottom: 'var(--space-1)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--bg-primary)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h4)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      margin: 'var(--space-2) 0 0'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: 'var(--text-inverse)',
  success: 'var(--success)',
  danger: 'var(--danger-soft)'
};
function Toast({
  tone = 'neutral',
  message,
  action,
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: TONES[tone]
    }
  }, message), action ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, action) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      color: 'var(--text-inverse)',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: "sm"
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px, -50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      zIndex: 40,
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      padding: '5px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      width: 18,
      height: 18,
      margin: '2px 0 0',
      accentColor: 'var(--accent-fill)',
      cursor: 'inherit'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-primary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  iconLeft,
  style,
  ...rest
}) {
  const base = {
    font: 'var(--type-body)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-primary)',
    background: 'var(--bg-primary)',
    border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
    borderRadius: 'var(--radius-md)',
    padding: '10px 14px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'none',
    transition: 'var(--transition-color)'
  };
  if (!iconLeft) return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      ...base,
      ...style
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "sm",
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      ...base,
      paddingLeft: 38,
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      width: 18,
      height: 18,
      margin: '2px 0 0',
      accentColor: 'var(--accent-fill)',
      cursor: 'inherit'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  invalid = false,
  options = [],
  children,
  style,
  ...rest
}) {
  const base = {
    font: 'var(--type-body)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-primary)',
    background: 'var(--bg-primary)',
    border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
    borderRadius: 'var(--radius-md)',
    padding: '10px 14px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'none',
    transition: 'var(--transition-color)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      ...base,
      appearance: 'none',
      paddingRight: 38,
      cursor: 'pointer',
      ...style
    }
  }), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      font: 'var(--type-small)',
      pointerEvents: 'none'
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(false);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled
  }, rest, {
    style: {
      width: 40,
      height: 22,
      padding: 2,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--accent-fill)' : 'var(--bg-tertiary)',
      border: '1px solid ' + (on ? 'var(--accent-fill)' : 'var(--border)'),
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'inherit',
      transition: 'var(--transition-color)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: on ? 'var(--bg-primary)' : 'var(--text-muted)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 4,
  style,
  ...rest
}) {
  const base = {
    font: 'var(--type-body)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-primary)',
    background: 'var(--bg-primary)',
    border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
    borderRadius: 'var(--radius-md)',
    padding: '10px 14px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'none',
    transition: 'var(--transition-color)'
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, rest, {
    style: {
      ...base,
      resize: 'vertical',
      lineHeight: 'var(--leading-relaxed)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      ...style
    }
  }), items.map((i, n) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i.label
  }, n > 0 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/") : null, i.href && n < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: i.href,
    style: {
      color: 'var(--text-secondary)'
    }
  }, i.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: n === items.length - 1 ? 'var(--text-primary)' : undefined
    }
  }, i.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  item,
  active,
  onSelect
}) {
  const [over, setOver] = React.useState(false);
  const isActive = active === item.id;
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(item.id);
      }
    },
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      font: 'var(--type-label)',
      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      padding: '4px 0',
      borderBottom: '2px solid ' + (isActive ? 'var(--accent)' : over ? 'var(--border-strong)' : 'transparent'),
      transition: 'var(--transition-color)'
    }
  }, item.label);
}
function NavBar({
  brand,
  items = [],
  active,
  onSelect,
  actions,
  sticky = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(20px, 4vw, 48px)',
      flexWrap: 'wrap',
      padding: 'var(--space-4) var(--page-margin)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-primary)',
      position: sticky ? 'sticky' : undefined,
      top: sticky ? 0 : undefined,
      zIndex: sticky ? 30 : undefined,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 'var(--text-md)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'clamp(16px, 2.5vw, 32px)',
      alignItems: 'center',
      flexWrap: 'wrap',
      flex: 1
    }
  }, items.map(i => /*#__PURE__*/React.createElement(NavLink, {
    key: i.id,
    item: i,
    active: active,
    onSelect: onSelect
  }))), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  style,
  ...rest
}) {
  const go = n => onChange && onChange(Math.min(pageCount, Math.max(1, n)));
  const pages = Array.from({
    length: pageCount
  }, (_, i) => i + 1).filter(n => n === 1 || n === pageCount || Math.abs(n - page) <= 1);
  const btn = active => ({
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: '4px 8px',
    font: 'var(--type-label)',
    color: active ? 'var(--accent)' : 'var(--text-secondary)',
    borderBottom: '1px solid ' + (active ? 'var(--accent)' : 'transparent')
  });
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page === 1,
    style: {
      ...btn(false),
      opacity: page === 1 ? 0.4 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: "sm"
  }), " Previous"), pages.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i > 0 && n - pages[i - 1] > 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u2026") : null, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(n),
    style: btn(n === page)
  }, n))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page === pageCount,
    style: {
      ...btn(false),
      opacity: page === pageCount ? 0.4 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Next ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }), items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.id,
    role: "tab",
    "aria-selected": active === i.id,
    onClick: () => select(i.id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '0 0 10px',
      font: 'var(--type-label)',
      color: active === i.id ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: '2px solid ' + (active === i.id ? 'var(--accent)' : 'transparent'),
      marginBottom: -1,
      transition: 'var(--transition-color)'
    }
  }, i.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/site/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = id => setOpen(o => o.includes(id) ? o.filter(x => x !== id) : allowMultiple ? [...o, id] : [id]);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderTop: '1px solid var(--border)',
      ...style
    }
  }), items.map(it => {
    const isOpen = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'var(--space-5) 0',
        font: 'var(--type-h4)',
        color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
        transition: 'var(--transition-color)'
      }
    }, it.question, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: "sm",
      color: isOpen ? 'var(--accent)' : 'var(--text-muted)'
    })), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-secondary)',
        maxWidth: '62ch',
        padding: '0 0 var(--space-5)'
      }
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/site/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Banner({
  message,
  action,
  onDismiss,
  surface = 'lifted',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: surface === 'inverse' ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
      color: surface === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)',
      borderBottom: '1px solid ' + (surface === 'inverse' ? 'var(--border-inverse)' : 'var(--border)'),
      padding: 'var(--space-3) var(--page-margin)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      font: 'var(--type-small)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", null, message), action, onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'inherit',
      display: 'inline-flex',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: "sm"
  })) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Banner.jsx", error: String((e && e.message) || e) }); }

// components/site/Container.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  prose: 'var(--width-prose)',
  app: 'var(--width-app)',
  wide: '1440px',
  full: '100%'
};
function Container({
  width = 'app',
  as = 'div',
  style,
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      width: '100%',
      maxWidth: WIDTHS[width],
      margin: '0 auto',
      paddingLeft: 'var(--page-margin)',
      paddingRight: 'var(--page-margin)',
      boxSizing: 'border-box',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Container.jsx", error: String((e && e.message) || e) }); }

// components/site/CTABand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABand({
  title,
  lead,
  actions,
  surface = 'inverse',
  style,
  ...rest
}) {
  const inverse = surface === 'inverse';
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      background: inverse ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      paddingTop: 'var(--section-pad)',
      paddingBottom: 'var(--section-pad)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-7)',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '28ch'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2-fluid)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead-fluid)',
      color: inverse ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
      margin: 'var(--space-4) 0 0'
    }
  }, lead) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, actions) : null)));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/site/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Figure({
  src,
  alt = '',
  caption,
  credit,
  ratio = '3 / 2',
  bleed = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      width: bleed ? '100%' : undefined,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--bg-tertiary)',
      borderRadius: bleed ? 0 : 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Image")), caption || credit ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      marginTop: 'var(--space-3)'
    }
  }, caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, caption) : /*#__PURE__*/React.createElement("span", null), credit ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, credit) : null) : null);
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Figure.jsx", error: String((e && e.message) || e) }); }

// components/site/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArticleCard({
  kicker,
  title,
  dek,
  meta,
  image,
  ratio = '3 / 2',
  href = '#',
  onClick,
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), image !== false ? /*#__PURE__*/React.createElement(__ds_scope.Figure, {
    src: image,
    ratio: ratio
  }) : null, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-md)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      color: 'var(--text-primary)',
      textDecoration: over ? 'underline' : 'none',
      textUnderlineOffset: '4px'
    }
  }, title)), dek ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, dek) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/site/Grid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Grid({
  min = 280,
  columns,
  gap = 'var(--stack-gap)',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: columns ? `repeat(${columns}, minmax(0, 1fr))` : `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
      gap,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Grid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Grid.jsx", error: String((e && e.message) || e) }); }

// components/site/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
  surface = 'page',
  align = 'split',
  style,
  ...rest
}) {
  const inverse = surface === 'inverse';
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      background: inverse ? 'var(--bg-inverse)' : surface === 'lifted' ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      paddingTop: 'var(--section-pad-lg)',
      paddingBottom: 'var(--section-pad)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: align === 'split' ? 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))' : '1fr',
      gap: 'clamp(32px, 6vw, 72px)',
      alignItems: 'end',
      textAlign: align === 'center' ? 'center' : 'left',
      justifyItems: align === 'center' ? 'center' : 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === 'center' ? '24ch' : '18ch'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: inverse ? 'var(--accent-soft)' : 'var(--text-muted)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-fluid)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '38ch',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead-fluid)',
      color: inverse ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
      margin: 0
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, actions) : null, aside))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Hero.jsx", error: String((e && e.message) || e) }); }

// components/site/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingCard({
  name,
  price,
  period = 'per year',
  description,
  features = [],
  action,
  featured = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: featured ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
      color: featured ? 'var(--text-inverse)' : 'var(--text-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: featured ? 'var(--accent-soft)' : 'var(--text-muted)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: featured ? 'rgba(233,238,242,.6)' : 'var(--text-muted)'
    }
  }, period)), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: featured ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
      margin: 'var(--space-3) 0 0'
    }
  }, description) : null), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, features.map(ft => /*#__PURE__*/React.createElement("li", {
    key: ft,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      font: 'var(--type-small)',
      color: featured ? 'rgba(233,238,242,.85)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: "sm",
    color: featured ? 'var(--accent-soft)' : 'var(--accent)'
  }), ft))), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/site/Prose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Prose({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      maxWidth: 'var(--width-prose)',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Prose.jsx", error: String((e && e.message) || e) }); }

// components/site/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  quote,
  attribution,
  source,
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({}, rest, {
    style: {
      margin: 0,
      borderTop: '1px solid var(--accent)',
      paddingTop: 'var(--space-5)',
      maxWidth: '30ch',
      ...style
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: size === 'lg' ? 'var(--type-h2-fluid)' : 'var(--type-h3-fluid)',
      letterSpacing: 'var(--tracking-display)',
      fontStyle: 'italic',
      margin: 0
    }
  }, "\u201C", quote, "\u201D"), attribution || source ? /*#__PURE__*/React.createElement("footer", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)'
    }
  }, [attribution, source].filter(Boolean).join(' · ')) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Quote.jsx", error: String((e && e.message) || e) }); }

// components/site/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  page: {
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)'
  },
  lifted: {
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)'
  },
  inverse: {
    background: 'var(--bg-inverse)',
    color: 'var(--text-inverse)'
  }
};
function Section({
  surface = 'page',
  size = 'md',
  width = 'app',
  divided = false,
  eyebrow,
  title,
  lead,
  actions,
  as = 'section',
  style,
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      ...SURFACES[surface],
      paddingTop: size === 'lg' ? 'var(--section-pad-lg)' : size === 'sm' ? 'var(--space-8)' : 'var(--section-pad)',
      paddingBottom: size === 'lg' ? 'var(--section-pad-lg)' : size === 'sm' ? 'var(--space-8)' : 'var(--section-pad)',
      borderTop: divided ? '1px solid ' + (surface === 'inverse' ? 'var(--border-inverse)' : 'var(--border)') : undefined,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Container, {
    width: width
  }, eyebrow || title || lead || actions ? /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginBottom: 'var(--stack-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: surface === 'inverse' ? 'var(--accent-soft)' : 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2-fluid)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead-fluid)',
      color: surface === 'inverse' ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
      margin: 'var(--space-4) 0 0'
    }
  }, lead) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, actions) : null) : null, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Section.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  brand = 'CTU',
  logo,
  blurb,
  groups = [],
  legal,
  surface = 'page',
  style,
  ...rest
}) {
  const inverse = surface === 'inverse';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      background: inverse ? 'var(--bg-inverse)' : 'var(--bg-primary)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      borderTop: '1px solid ' + line,
      paddingTop: 'var(--section-pad)',
      paddingBottom: 'var(--space-7)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
      gap: 'var(--stack-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '28ch'
    }
  }, logo || /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, brand), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: inverse ? 'rgba(233,238,242,.6)' : 'var(--text-secondary)',
      margin: 'var(--space-3) 0 0'
    }
  }, blurb) : null), groups.map(g => /*#__PURE__*/React.createElement("nav", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: inverse ? 'rgba(233,238,242,.5)' : 'var(--text-muted)'
    }
  }, g.title), g.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      font: 'var(--type-small)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-secondary)'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      borderTop: '1px solid ' + line,
      marginTop: 'var(--section-pad)',
      paddingTop: 'var(--space-5)',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      color: inverse ? 'rgba(233,238,242,.5)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal || '© ' + new Date().getFullYear() + ' ' + brand), /*#__PURE__*/React.createElement("span", null, "Set in Newsreader and Work Sans"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// preview-bundle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Auto-generated preview bundle. Concatenates every component and UI-kit screen
   into one Babel-transformed script exposing window.CTU, so the cards and kits
   render without the design-system compiler's _ds_bundle.js.
   Regenerate after editing any .jsx: it is a build artifact, not a source file. */
window.CTU = window.CTU || {};
(function () {
  const W = window.CTU;

  /* ---- components/core/Icon.jsx ---- */
  (function () {
    const SIZES = {
      sm: 16,
      md: 20,
      lg: 24
    };
    function Icon({
      name,
      size = 'md',
      color = 'currentColor',
      strokeWidth,
      style,
      ...rest
    }) {
      const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
      const url = `https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`;
      return /*#__PURE__*/React.createElement("span", _extends({
        "aria-hidden": "true"
      }, rest, {
        style: {
          display: 'inline-block',
          width: px,
          height: px,
          flex: '0 0 auto',
          backgroundColor: color,
          WebkitMaskImage: `url(${url})`,
          maskImage: `url(${url})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          ...style
        }
      }));
    }
    Object.assign(W, {
      Icon
    });
  })();

  /* ---- components/core/Button.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    const PAD = {
      sm: '6px 12px',
      md: '10px 18px',
      lg: '14px 24px'
    };
    const FONT = {
      sm: 'var(--text-2xs)',
      md: 'var(--text-xs)',
      lg: 'var(--text-sm)'
    };
    function Button({
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      disabled = false,
      fullWidth = false,
      as = 'button',
      style,
      children,
      ...rest
    }) {
      const base = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        font: 'var(--type-label)',
        fontSize: FONT[size],
        padding: PAD[size],
        borderRadius: 'var(--radius-md)',
        border: '1px solid transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        width: fullWidth ? '100%' : undefined,
        transition: 'var(--transition-color)',
        textDecoration: 'none'
      };
      const variants = {
        primary: {
          background: 'var(--accent-fill)',
          color: 'var(--on-accent)'
        },
        secondary: {
          background: 'transparent',
          color: 'var(--text-primary)',
          borderColor: 'var(--border)'
        },
        ghost: {
          background: 'transparent',
          color: 'var(--text-primary)',
          padding: PAD[size].split(' ')[0] + ' 0'
        },
        danger: {
          background: 'var(--danger)',
          color: 'var(--on-accent)'
        }
      };
      const hover = {
        primary: {
          background: 'var(--accent-fill-hover)'
        },
        secondary: {
          background: 'var(--bg-secondary)'
        },
        ghost: {
          textDecoration: 'underline',
          textUnderlineOffset: '3px'
        },
        danger: {
          background: 'var(--danger-hover)'
        }
      };
      const [over, setOver] = React.useState(false);
      const Tag = as;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        disabled: as === 'button' ? disabled : undefined,
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false)
      }, rest, {
        style: {
          ...base,
          ...variants[variant],
          ...(over && !disabled ? hover[variant] : null),
          ...style
        }
      }), iconLeft ? /*#__PURE__*/React.createElement(Icon, {
        name: iconLeft,
        size: "sm"
      }) : null, children, iconRight ? /*#__PURE__*/React.createElement(Icon, {
        name: iconRight,
        size: "sm"
      }) : null);
    }
    Object.assign(W, {
      Button
    });
  })();

  /* ---- components/core/IconButton.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    const BOX = {
      sm: 28,
      md: 36,
      lg: 44
    };
    function IconButton({
      icon,
      label,
      variant = 'ghost',
      size = 'md',
      disabled = false,
      style,
      ...rest
    }) {
      const [over, setOver] = React.useState(false);
      const variants = {
        ghost: {
          background: over ? 'var(--bg-secondary)' : 'transparent',
          color: 'var(--text-secondary)',
          borderColor: 'transparent'
        },
        outline: {
          background: over ? 'var(--bg-secondary)' : 'transparent',
          color: 'var(--text-primary)',
          borderColor: 'var(--border)'
        },
        solid: {
          background: over ? 'var(--accent-fill-hover)' : 'var(--accent-fill)',
          color: 'var(--on-accent)',
          borderColor: 'transparent'
        }
      };
      return /*#__PURE__*/React.createElement("button", _extends({
        "aria-label": label,
        title: label,
        disabled: disabled,
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false)
      }, rest, {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: BOX[size],
          height: BOX[size],
          border: '1px solid transparent',
          borderRadius: 'var(--radius-md)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
          transition: 'var(--transition-color)',
          ...variants[variant],
          ...style
        }
      }), /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: size === 'lg' ? 'md' : 'sm'
      }));
    }
    Object.assign(W, {
      IconButton
    });
  })();

  /* ---- components/core/Card.jsx ---- */
  (function () {
    function Card({
      as = 'div',
      padding = 'md',
      interactive = false,
      inverse = false,
      style,
      children,
      ...rest
    }) {
      const [over, setOver] = React.useState(false);
      const pads = {
        none: 0,
        sm: 'var(--space-4)',
        md: 'var(--space-5)',
        lg: 'var(--space-6)'
      };
      const Tag = as;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false)
      }, rest, {
        style: {
          background: inverse ? 'var(--bg-inverse)' : 'var(--surface-card)',
          color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: pads[padding],
          border: '1px solid ' + (interactive && over ? inverse ? 'var(--border-inverse)' : 'var(--border)' : 'transparent'),
          transition: 'border-color var(--duration-base) var(--ease-standard)',
          cursor: interactive ? 'pointer' : undefined,
          ...style
        }
      }), children);
    }
    Object.assign(W, {
      Card
    });
  })();

  /* ---- components/core/Badge.jsx ---- */
  (function () {
    const TONES = {
      neutral: {
        color: 'var(--text-secondary)',
        border: 'var(--border)',
        bg: 'transparent'
      },
      accent: {
        color: 'var(--accent)',
        border: 'var(--accent)',
        bg: 'transparent'
      },
      success: {
        color: 'var(--success)',
        border: 'var(--success)',
        bg: 'transparent'
      },
      warning: {
        color: 'var(--warning)',
        border: 'var(--warning)',
        bg: 'transparent'
      },
      danger: {
        color: 'var(--danger)',
        border: 'var(--danger)',
        bg: 'transparent'
      },
      solid: {
        color: 'var(--on-accent)',
        border: 'transparent',
        bg: 'var(--accent-fill)'
      }
    };
    function Badge({
      tone = 'neutral',
      style,
      children,
      ...rest
    }) {
      const t = TONES[tone];
      return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          font: 'var(--type-mono)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-mono)',
          padding: '3px 8px',
          borderRadius: 'var(--radius-sm)',
          color: t.color,
          border: '1px solid ' + t.border,
          background: t.bg,
          ...style
        }
      }), children);
    }
    Object.assign(W, {
      Badge
    });
  })();

  /* ---- components/core/Tag.jsx ---- */
  (function () {
    function Tag({
      onRemove,
      active = false,
      style,
      children,
      ...rest
    }) {
      const [over, setOver] = React.useState(false);
      return /*#__PURE__*/React.createElement("span", _extends({
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false)
      }, rest, {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          font: 'var(--type-small)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-pill)',
          background: active ? 'var(--accent-wash)' : over ? 'var(--bg-secondary)' : 'transparent',
          color: active ? 'var(--accent)' : 'var(--text-secondary)',
          border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border)'),
          transition: 'var(--transition-color)',
          ...style
        }
      }), children, onRemove ? /*#__PURE__*/React.createElement("button", {
        onClick: onRemove,
        "aria-label": "Remove",
        style: {
          border: 0,
          background: 'none',
          padding: 0,
          cursor: 'pointer',
          color: 'inherit',
          font: 'var(--type-small)',
          lineHeight: 1
        }
      }, "\xD7") : null);
    }
    Object.assign(W, {
      Tag
    });
  })();

  /* ---- components/core/Divider.jsx ---- */
  (function () {
    function Divider({
      orientation = 'horizontal',
      spacing = 'md',
      label,
      style,
      ...rest
    }) {
      const gaps = {
        none: 0,
        sm: 'var(--space-4)',
        md: 'var(--space-6)',
        lg: 'var(--space-8)'
      };
      if (orientation === 'vertical') {
        return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
          style: {
            width: 1,
            alignSelf: 'stretch',
            background: 'var(--border)',
            margin: '0 ' + gaps[spacing],
            ...style
          }
        }));
      }
      if (label) {
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            margin: gaps[spacing] + ' 0',
            ...style
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            height: 1,
            flex: 1,
            background: 'var(--border)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            font: 'var(--type-eyebrow)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-label)',
            color: 'var(--text-muted)'
          }
        }, label), /*#__PURE__*/React.createElement("span", {
          style: {
            height: 1,
            flex: 1,
            background: 'var(--border)'
          }
        }));
      }
      return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
        style: {
          border: 0,
          height: 1,
          background: 'var(--border)',
          margin: gaps[spacing] + ' 0',
          ...style
        }
      }));
    }
    Object.assign(W, {
      Divider
    });
  })();

  /* ---- components/brand/Logo.jsx ---- */
  (function () {
    /* The CTU lockup: monogram, "FORO FEDERAL", and the expanded
       "Ciencia Tecnología Universidad" line. A supplied asset — never redrawn.
       Three crops of the same file, because the lower lines stop being legible
       as the mark shrinks: full (all three), compact (monogram + FORO FEDERAL,
       56px and up), mark (monogram only, for mastheads and small chrome). */
    const RATIOS = {
      full: '1123 / 794',
      compact: '1123 / 655',
      mark: '1123 / 515'
    };
    function Logo({
      height = 56,
      variant = 'full',
      tone = 'ink',
      href,
      style,
      ...rest
    }) {
      const img = /*#__PURE__*/React.createElement("img", {
        src: window.__CTU_LOGO_SRC__ || 'assets/logos/ctu-foro-federal.png',
        alt: "CTU \u2014 Foro Federal de Ciencia, Tecnolog\xEDa y Universidad",
        style: {
          height,
          width: 'auto',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'top',
          aspectRatio: RATIOS[variant],
          filter: tone === 'inverse' ? 'invert(1) brightness(1.9) saturate(0)' : undefined
        }
      });
      return href ? /*#__PURE__*/React.createElement("a", _extends({
        href: href
      }, rest, {
        style: {
          display: 'inline-flex',
          ...style
        }
      }), img) : /*#__PURE__*/React.createElement("span", _extends({}, rest, {
        style: {
          display: 'inline-flex',
          ...style
        }
      }), img);
    }
    Object.assign(W, {
      Logo
    });
  })();

  /* ---- components/forms/Field.jsx ---- */
  (function () {
    function Field({
      label,
      hint,
      error,
      required = false,
      htmlFor,
      style,
      children,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
          ...style
        }
      }), label ? /*#__PURE__*/React.createElement("label", {
        htmlFor: htmlFor,
        style: {
          font: 'var(--type-label)',
          color: 'var(--text-primary)'
        }
      }, label, required ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--accent)'
        }
      }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--danger)'
        }
      }, error) : hint ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-muted)'
        }
      }, hint) : null);
    }
    Object.assign(W, {
      Field
    });
  })();

  /* ---- components/forms/Input.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    function Input({
      invalid = false,
      iconLeft,
      style,
      ...rest
    }) {
      const base = {
        font: 'var(--type-body)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-primary)',
        background: 'var(--bg-primary)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: 'none',
        transition: 'var(--transition-color)'
      };
      if (!iconLeft) return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
        style: {
          ...base,
          ...style
        }
      }));
      return /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'relative',
          display: 'block'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: iconLeft,
        size: "sm",
        color: "var(--text-muted)",
        style: {
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)'
        }
      }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
        style: {
          ...base,
          paddingLeft: 38,
          ...style
        }
      })));
    }
    Object.assign(W, {
      Input
    });
  })();

  /* ---- components/forms/Textarea.jsx ---- */
  (function () {
    function Textarea({
      invalid = false,
      rows = 4,
      style,
      ...rest
    }) {
      const base = {
        font: 'var(--type-body)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-primary)',
        background: 'var(--bg-primary)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: 'none',
        transition: 'var(--transition-color)'
      };
      return /*#__PURE__*/React.createElement("textarea", _extends({
        rows: rows
      }, rest, {
        style: {
          ...base,
          resize: 'vertical',
          lineHeight: 'var(--leading-relaxed)',
          ...style
        }
      }));
    }
    Object.assign(W, {
      Textarea
    });
  })();

  /* ---- components/forms/Select.jsx ---- */
  (function () {
    function Select({
      invalid = false,
      options = [],
      children,
      style,
      ...rest
    }) {
      const base = {
        font: 'var(--type-body)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-primary)',
        background: 'var(--bg-primary)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : 'var(--border)'),
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: 'none',
        transition: 'var(--transition-color)'
      };
      return /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'relative',
          display: 'block'
        }
      }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
        style: {
          ...base,
          appearance: 'none',
          paddingRight: 38,
          cursor: 'pointer',
          ...style
        }
      }), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
        key: o,
        value: o
      }, o) : /*#__PURE__*/React.createElement("option", {
        key: o.value,
        value: o.value
      }, o.label))), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          position: 'absolute',
          right: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)',
          font: 'var(--type-small)',
          pointerEvents: 'none'
        }
      }, "\u25BE"));
    }
    Object.assign(W, {
      Select
    });
  })();

  /* ---- components/forms/Checkbox.jsx ---- */
  (function () {
    function Checkbox({
      label,
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("label", {
        style: {
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: 'var(--space-3)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
          ...style
        }
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "checkbox",
        checked: checked,
        defaultChecked: defaultChecked,
        onChange: onChange,
        disabled: disabled
      }, rest, {
        style: {
          width: 18,
          height: 18,
          margin: '2px 0 0',
          accentColor: 'var(--accent-fill)',
          cursor: 'inherit'
        }
      })), label ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)'
        }
      }, label) : null);
    }
    Object.assign(W, {
      Checkbox
    });
  })();

  /* ---- components/forms/Radio.jsx ---- */
  (function () {
    function Radio({
      label,
      name,
      value,
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("label", {
        style: {
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: 'var(--space-3)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
          ...style
        }
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "radio",
        name: name,
        value: value,
        checked: checked,
        defaultChecked: defaultChecked,
        onChange: onChange,
        disabled: disabled
      }, rest, {
        style: {
          width: 18,
          height: 18,
          margin: '2px 0 0',
          accentColor: 'var(--accent-fill)',
          cursor: 'inherit'
        }
      })), label ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)'
        }
      }, label) : null);
    }
    Object.assign(W, {
      Radio
    });
  })();

  /* ---- components/forms/Switch.jsx ---- */
  (function () {
    function Switch({
      checked,
      onChange,
      label,
      disabled = false,
      style,
      ...rest
    }) {
      const [internal, setInternal] = React.useState(false);
      const on = checked !== undefined ? checked : internal;
      const toggle = () => {
        if (disabled) return;
        if (checked === undefined) setInternal(!on);
        onChange && onChange(!on);
      };
      return /*#__PURE__*/React.createElement("label", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
          ...style
        }
      }, /*#__PURE__*/React.createElement("button", _extends({
        type: "button",
        role: "switch",
        "aria-checked": on,
        onClick: toggle,
        disabled: disabled
      }, rest, {
        style: {
          width: 40,
          height: 22,
          padding: 2,
          borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--accent-fill)' : 'var(--bg-tertiary)',
          border: '1px solid ' + (on ? 'var(--accent-fill)' : 'var(--border)'),
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'inherit',
          transition: 'var(--transition-color)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: on ? 'var(--bg-primary)' : 'var(--text-muted)',
          transform: on ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform var(--duration-base) var(--ease-standard)'
        }
      })), label ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)'
        }
      }, label) : null);
    }
    Object.assign(W, {
      Switch
    });
  })();

  /* ---- components/navigation/NavBar.jsx ---- */
  (function () {
    function NavLink({
      item,
      active,
      onSelect
    }) {
      const [over, setOver] = React.useState(false);
      const isActive = active === item.id;
      return /*#__PURE__*/React.createElement("a", {
        href: item.href || '#',
        onClick: e => {
          if (onSelect) {
            e.preventDefault();
            onSelect(item.id);
          }
        },
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false),
        style: {
          font: 'var(--type-label)',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
          textDecoration: 'none',
          padding: '4px 0',
          borderBottom: '2px solid ' + (isActive ? 'var(--accent)' : over ? 'var(--border-strong)' : 'transparent'),
          transition: 'var(--transition-color)'
        }
      }, item.label);
    }
    function NavBar({
      brand,
      items = [],
      active,
      onSelect,
      actions,
      sticky = false,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 4vw, 48px)',
          flexWrap: 'wrap',
          padding: 'var(--space-4) var(--page-margin)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-primary)',
          position: sticky ? 'sticky' : undefined,
          top: sticky ? 0 : undefined,
          zIndex: sticky ? 30 : undefined,
          ...style
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-h4)',
          fontSize: 'var(--text-md)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, brand), /*#__PURE__*/React.createElement("nav", {
        style: {
          display: 'flex',
          gap: 'clamp(16px, 2.5vw, 32px)',
          alignItems: 'center',
          flexWrap: 'wrap',
          flex: 1
        }
      }, items.map(i => /*#__PURE__*/React.createElement(NavLink, {
        key: i.id,
        item: i,
        active: active,
        onSelect: onSelect
      }))), actions ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center'
        }
      }, actions) : null);
    }
    Object.assign(W, {
      NavBar
    });
  })();

  /* ---- components/navigation/Tabs.jsx ---- */
  (function () {
    function Tabs({
      items = [],
      value,
      onChange,
      style,
      ...rest
    }) {
      const [internal, setInternal] = React.useState(items[0] && items[0].id);
      const active = value !== undefined ? value : internal;
      const select = id => {
        if (value === undefined) setInternal(id);
        onChange && onChange(id);
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        role: "tablist"
      }, rest, {
        style: {
          display: 'flex',
          gap: 'var(--space-6)',
          borderBottom: '1px solid var(--border)',
          ...style
        }
      }), items.map(i => /*#__PURE__*/React.createElement("button", {
        key: i.id,
        role: "tab",
        "aria-selected": active === i.id,
        onClick: () => select(i.id),
        style: {
          background: 'none',
          border: 0,
          cursor: 'pointer',
          padding: '0 0 10px',
          font: 'var(--type-label)',
          color: active === i.id ? 'var(--text-primary)' : 'var(--text-secondary)',
          borderBottom: '2px solid ' + (active === i.id ? 'var(--accent)' : 'transparent'),
          marginBottom: -1,
          transition: 'var(--transition-color)'
        }
      }, i.label)));
    }
    Object.assign(W, {
      Tabs
    });
  })();

  /* ---- components/navigation/Breadcrumbs.jsx ---- */
  (function () {
    function Breadcrumbs({
      items = [],
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("nav", _extends({
        "aria-label": "Breadcrumb"
      }, rest, {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          font: 'var(--type-small)',
          color: 'var(--text-muted)',
          ...style
        }
      }), items.map((i, n) => /*#__PURE__*/React.createElement(React.Fragment, {
        key: i.label
      }, n > 0 ? /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true"
      }, "/") : null, i.href && n < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
        href: i.href,
        style: {
          color: 'var(--text-secondary)'
        }
      }, i.label) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: n === items.length - 1 ? 'var(--text-primary)' : undefined
        }
      }, i.label))));
    }
    Object.assign(W, {
      Breadcrumbs
    });
  })();

  /* ---- components/navigation/Pagination.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    function Pagination({
      page = 1,
      pageCount = 1,
      onChange,
      style,
      ...rest
    }) {
      const go = n => onChange && onChange(Math.min(pageCount, Math.max(1, n)));
      const pages = Array.from({
        length: pageCount
      }, (_, i) => i + 1).filter(n => n === 1 || n === pageCount || Math.abs(n - page) <= 1);
      const btn = active => ({
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '4px 8px',
        font: 'var(--type-label)',
        color: active ? 'var(--accent)' : 'var(--text-secondary)',
        borderBottom: '1px solid ' + (active ? 'var(--accent)' : 'transparent')
      });
      return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          ...style
        }
      }), /*#__PURE__*/React.createElement("button", {
        onClick: () => go(page - 1),
        disabled: page === 1,
        style: {
          ...btn(false),
          opacity: page === 1 ? 0.4 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: "sm"
      }), " Previous"), pages.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
        key: n
      }, i > 0 && n - pages[i - 1] > 1 ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-muted)'
        }
      }, "\u2026") : null, /*#__PURE__*/React.createElement("button", {
        onClick: () => go(n),
        style: btn(n === page)
      }, n))), /*#__PURE__*/React.createElement("button", {
        onClick: () => go(page + 1),
        disabled: page === pageCount,
        style: {
          ...btn(false),
          opacity: page === pageCount ? 0.4 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6
        }
      }, "Next ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: "sm"
      })));
    }
    Object.assign(W, {
      Pagination
    });
  })();

  /* ---- components/feedback/Callout.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    const TONES = {
      note: {
        color: 'var(--text-secondary)',
        rule: 'var(--border-strong)',
        icon: 'pencil-line'
      },
      accent: {
        color: 'var(--accent)',
        rule: 'var(--accent)',
        icon: 'quote'
      },
      success: {
        color: 'var(--success)',
        rule: 'var(--success)',
        icon: 'check'
      },
      warning: {
        color: 'var(--warning)',
        rule: 'var(--warning)',
        icon: 'triangle-alert'
      },
      danger: {
        color: 'var(--danger)',
        rule: 'var(--danger)',
        icon: 'octagon-alert'
      }
    };
    function Callout({
      tone = 'note',
      title,
      icon,
      style,
      children,
      ...rest
    }) {
      const t = TONES[tone];
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          display: 'flex',
          gap: 'var(--space-4)',
          padding: 'var(--space-4) 0',
          borderTop: '1px solid ' + t.rule,
          ...style
        }
      }), /*#__PURE__*/React.createElement(Icon, {
        name: icon || t.icon,
        size: "sm",
        color: t.color,
        style: {
          marginTop: 4
        }
      }), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-label)',
          color: t.color,
          marginBottom: 'var(--space-1)'
        }
      }, title) : null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-secondary)'
        }
      }, children)));
    }
    Object.assign(W, {
      Callout
    });
  })();

  /* ---- components/feedback/Dialog.jsx ---- */
  (function () {
    const IconButton = p => W.IconButton(p);
    function Dialog({
      open = false,
      title,
      description,
      onClose,
      footer,
      width = 520,
      children
    }) {
      if (!open) return null;
      return /*#__PURE__*/React.createElement("div", {
        role: "presentation",
        onClick: onClose,
        style: {
          position: 'fixed',
          inset: 0,
          background: 'var(--surface-overlay)',
          display: 'grid',
          placeItems: 'center',
          padding: 'var(--space-6)',
          zIndex: 50
        }
      }, /*#__PURE__*/React.createElement("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title,
        onClick: e => e.stopPropagation(),
        style: {
          width: '100%',
          maxWidth: width,
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)',
          padding: 'var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, title ? /*#__PURE__*/React.createElement("h2", {
        style: {
          font: 'var(--type-h4)'
        }
      }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-2) 0 0'
        }
      }, description) : null), onClose ? /*#__PURE__*/React.createElement(IconButton, {
        icon: "x",
        label: "Close",
        onClick: onClose
      }) : null), children ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 'var(--space-5)'
        }
      }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 'var(--space-3)'
        }
      }, footer) : null));
    }
    Object.assign(W, {
      Dialog
    });
  })();

  /* ---- components/feedback/Toast.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    const TONES = {
      neutral: 'var(--text-inverse)',
      success: 'var(--success)',
      danger: 'var(--danger-soft)'
    };
    function Toast({
      tone = 'neutral',
      message,
      action,
      onDismiss,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({
        role: "status"
      }, rest, {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          background: 'var(--bg-inverse)',
          color: 'var(--text-inverse)',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)',
          ...style
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: TONES[tone]
        }
      }, message), action ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex'
        }
      }, action) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
        onClick: onDismiss,
        "aria-label": "Dismiss",
        style: {
          background: 'none',
          border: 0,
          padding: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          color: 'var(--text-inverse)',
          opacity: 0.6
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "x",
        size: "sm"
      })) : null);
    }
    Object.assign(W, {
      Toast
    });
  })();

  /* ---- components/feedback/Tooltip.jsx ---- */
  (function () {
    function Tooltip({
      label,
      placement = 'top',
      children,
      style,
      ...rest
    }) {
      const [show, setShow] = React.useState(false);
      const pos = {
        top: {
          bottom: '100%',
          left: '50%',
          transform: 'translate(-50%, -8px)'
        },
        bottom: {
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 8px)'
        },
        left: {
          right: '100%',
          top: '50%',
          transform: 'translate(-8px, -50%)'
        },
        right: {
          left: '100%',
          top: '50%',
          transform: 'translate(8px, -50%)'
        }
      }[placement];
      return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
        onFocus: () => setShow(true),
        onBlur: () => setShow(false),
        style: {
          position: 'relative',
          display: 'inline-flex',
          ...style
        }
      }), children, show ? /*#__PURE__*/React.createElement("span", {
        role: "tooltip",
        style: {
          position: 'absolute',
          ...pos,
          whiteSpace: 'nowrap',
          zIndex: 40,
          background: 'var(--bg-inverse)',
          color: 'var(--text-inverse)',
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          padding: '5px 8px',
          borderRadius: 'var(--radius-sm)'
        }
      }, label) : null);
    }
    Object.assign(W, {
      Tooltip
    });
  })();

  /* ---- components/data/Table.jsx ---- */
  (function () {
    function Table({
      columns = [],
      rows = [],
      zebra = true,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("table", _extends({}, rest, {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)',
          ...style
        }
      }), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
        key: c.key,
        scope: "col",
        style: {
          textAlign: c.align || 'left',
          padding: '10px 12px',
          font: 'var(--type-mono)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)',
          borderBottom: '1px solid var(--border)',
          whiteSpace: 'nowrap'
        }
      }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
        key: r.id || i,
        style: {
          background: zebra && i % 2 === 1 ? 'var(--bg-secondary)' : 'transparent'
        }
      }, columns.map(c => /*#__PURE__*/React.createElement("td", {
        key: c.key,
        style: {
          textAlign: c.align || 'left',
          padding: '12px',
          color: 'var(--text-secondary)',
          verticalAlign: 'top'
        }
      }, c.render ? c.render(r) : r[c.key]))))));
    }
    Object.assign(W, {
      Table
    });
  })();

  /* ---- components/data/Stat.jsx ---- */
  (function () {
    function Stat({
      label,
      value,
      note,
      align = 'left',
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-1)',
          textAlign: align,
          ...style
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-muted)'
        }
      }, label), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-h3)',
          fontSize: 'var(--text-xl)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, value), note ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)'
        }
      }, note) : null);
    }
    Object.assign(W, {
      Stat
    });
  })();

  /* ---- components/site/Container.jsx ---- */
  (function () {
    const WIDTHS = {
      prose: 'var(--width-prose)',
      app: 'var(--width-app)',
      wide: '1440px',
      full: '100%'
    };
    function Container({
      width = 'app',
      as = 'div',
      style,
      children,
      ...rest
    }) {
      const Tag = as;
      return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
        style: {
          width: '100%',
          maxWidth: WIDTHS[width],
          margin: '0 auto',
          paddingLeft: 'var(--page-margin)',
          paddingRight: 'var(--page-margin)',
          boxSizing: 'border-box',
          ...style
        }
      }), children);
    }
    Object.assign(W, {
      Container
    });
  })();

  /* ---- components/site/Section.jsx ---- */
  (function () {
    const Container = p => W.Container(p);
    const SURFACES = {
      page: {
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      },
      lifted: {
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)'
      },
      inverse: {
        background: 'var(--bg-inverse)',
        color: 'var(--text-inverse)'
      }
    };
    function Section({
      surface = 'page',
      size = 'md',
      width = 'app',
      divided = false,
      eyebrow,
      title,
      lead,
      actions,
      as = 'section',
      style,
      children,
      ...rest
    }) {
      const Tag = as;
      return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
        style: {
          ...SURFACES[surface],
          paddingTop: size === 'lg' ? 'var(--section-pad-lg)' : size === 'sm' ? 'var(--space-8)' : 'var(--section-pad)',
          paddingBottom: size === 'lg' ? 'var(--section-pad-lg)' : size === 'sm' ? 'var(--space-8)' : 'var(--section-pad)',
          borderTop: divided ? '1px solid ' + (surface === 'inverse' ? 'var(--border-inverse)' : 'var(--border)') : undefined,
          ...style
        }
      }), /*#__PURE__*/React.createElement(Container, {
        width: width
      }, eyebrow || title || lead || actions ? /*#__PURE__*/React.createElement("header", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 'var(--space-5)',
          marginBottom: 'var(--stack-gap)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '52ch'
        }
      }, eyebrow ? /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: surface === 'inverse' ? 'var(--accent-soft)' : 'var(--text-muted)',
          marginBottom: 'var(--space-3)'
        }
      }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
        style: {
          font: 'var(--type-h2-fluid)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-lead-fluid)',
          color: surface === 'inverse' ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
          margin: 'var(--space-4) 0 0'
        }
      }, lead) : null), actions ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          flexWrap: 'wrap'
        }
      }, actions) : null) : null, children));
    }
    Object.assign(W, {
      Section
    });
  })();

  /* ---- components/site/Grid.jsx ---- */
  (function () {
    function Grid({
      min = 280,
      columns,
      gap = 'var(--stack-gap)',
      style,
      children,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          display: 'grid',
          gridTemplateColumns: columns ? `repeat(${columns}, minmax(0, 1fr))` : `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
          gap,
          ...style
        }
      }), children);
    }
    Object.assign(W, {
      Grid
    });
  })();

  /* ---- components/site/Hero.jsx ---- */
  (function () {
    const Container = p => W.Container(p);
    function Hero({
      eyebrow,
      title,
      lead,
      actions,
      aside,
      surface = 'page',
      align = 'split',
      style,
      ...rest
    }) {
      const inverse = surface === 'inverse';
      return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
        style: {
          background: inverse ? 'var(--bg-inverse)' : surface === 'lifted' ? 'var(--bg-secondary)' : 'var(--bg-primary)',
          color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
          paddingTop: 'var(--section-pad-lg)',
          paddingBottom: 'var(--section-pad)',
          ...style
        }
      }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: align === 'split' ? 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))' : '1fr',
          gap: 'clamp(32px, 6vw, 72px)',
          alignItems: 'end',
          textAlign: align === 'center' ? 'center' : 'left',
          justifyItems: align === 'center' ? 'center' : 'stretch'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: align === 'center' ? '24ch' : '18ch'
        }
      }, eyebrow ? /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: inverse ? 'var(--accent-soft)' : 'var(--text-muted)',
          marginBottom: 'var(--space-4)'
        }
      }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-display-fluid)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, title)), /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '38ch',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          alignItems: align === 'center' ? 'center' : 'flex-start'
        }
      }, lead ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-lead-fluid)',
          color: inverse ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
          margin: 0
        }
      }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          flexWrap: 'wrap'
        }
      }, actions) : null, aside))));
    }
    Object.assign(W, {
      Hero
    });
  })();

  /* ---- components/site/Figure.jsx ---- */
  (function () {
    function Figure({
      src,
      alt = '',
      caption,
      credit,
      ratio = '3 / 2',
      bleed = false,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
        style: {
          margin: 0,
          width: bleed ? '100%' : undefined,
          ...style
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          aspectRatio: ratio,
          background: 'var(--bg-tertiary)',
          borderRadius: bleed ? 0 : 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center'
        }
      }, src ? /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: alt,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)'
        }
      }, "Image")), caption || credit ? /*#__PURE__*/React.createElement("figcaption", {
        style: {
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'space-between',
          marginTop: 'var(--space-3)'
        }
      }, caption ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)'
        }
      }, caption) : /*#__PURE__*/React.createElement("span", null), credit ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)',
          whiteSpace: 'nowrap'
        }
      }, credit) : null) : null);
    }
    Object.assign(W, {
      Figure
    });
  })();

  /* ---- components/site/Prose.jsx ---- */
  (function () {
    function Prose({
      style,
      children,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          maxWidth: 'var(--width-prose)',
          font: 'var(--type-body)',
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
          ...style
        }
      }), children);
    }
    Object.assign(W, {
      Prose
    });
  })();

  /* ---- components/site/Quote.jsx ---- */
  (function () {
    function Quote({
      quote,
      attribution,
      source,
      size = 'md',
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("blockquote", _extends({}, rest, {
        style: {
          margin: 0,
          borderTop: '1px solid var(--accent)',
          paddingTop: 'var(--space-5)',
          maxWidth: '30ch',
          ...style
        }
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          font: size === 'lg' ? 'var(--type-h2-fluid)' : 'var(--type-h3-fluid)',
          letterSpacing: 'var(--tracking-display)',
          fontStyle: 'italic',
          margin: 0
        }
      }, "\u201C", quote, "\u201D"), attribution || source ? /*#__PURE__*/React.createElement("footer", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginTop: 'var(--space-4)'
        }
      }, [attribution, source].filter(Boolean).join(' · ')) : null);
    }
    Object.assign(W, {
      Quote
    });
  })();

  /* ---- components/site/ArticleCard.jsx ---- */
  (function () {
    const Figure = p => W.Figure(p);
    function ArticleCard({
      kicker,
      title,
      dek,
      meta,
      image,
      ratio = '3 / 2',
      href = '#',
      onClick,
      style,
      ...rest
    }) {
      const [over, setOver] = React.useState(false);
      return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
        onMouseEnter: () => setOver(true),
        onMouseLeave: () => setOver(false),
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          ...style
        }
      }), image !== false ? /*#__PURE__*/React.createElement(Figure, {
        src: image,
        ratio: ratio
      }) : null, kicker ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-muted)'
        }
      }, kicker) : null, /*#__PURE__*/React.createElement("h3", {
        style: {
          font: 'var(--type-h3)',
          fontSize: 'var(--text-md)'
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: href,
        onClick: onClick,
        style: {
          color: 'var(--text-primary)',
          textDecoration: over ? 'underline' : 'none',
          textUnderlineOffset: '4px'
        }
      }, title)), dek ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)',
          margin: 0
        }
      }, dek) : null, meta ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)'
        }
      }, meta) : null);
    }
    Object.assign(W, {
      ArticleCard
    });
  })();

  /* ---- components/site/Accordion.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    function Accordion({
      items = [],
      allowMultiple = false,
      style,
      ...rest
    }) {
      const [open, setOpen] = React.useState([]);
      const toggle = id => setOpen(o => o.includes(id) ? o.filter(x => x !== id) : allowMultiple ? [...o, id] : [id]);
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          borderTop: '1px solid var(--border)',
          ...style
        }
      }), items.map(it => {
        const isOpen = open.includes(it.id);
        return /*#__PURE__*/React.createElement("div", {
          key: it.id,
          style: {
            borderBottom: '1px solid var(--border)'
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => toggle(it.id),
          "aria-expanded": isOpen,
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            background: 'none',
            border: 0,
            cursor: 'pointer',
            textAlign: 'left',
            padding: 'var(--space-5) 0',
            font: 'var(--type-h4)',
            color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
            transition: 'var(--transition-color)'
          }
        }, it.question, /*#__PURE__*/React.createElement(Icon, {
          name: isOpen ? 'minus' : 'plus',
          size: "sm",
          color: isOpen ? 'var(--accent)' : 'var(--text-muted)'
        })), isOpen ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            color: 'var(--text-secondary)',
            maxWidth: '62ch',
            padding: '0 0 var(--space-5)'
          }
        }, it.answer) : null);
      }));
    }
    Object.assign(W, {
      Accordion
    });
  })();

  /* ---- components/site/CTABand.jsx ---- */
  (function () {
    const Container = p => W.Container(p);
    function CTABand({
      title,
      lead,
      actions,
      surface = 'inverse',
      style,
      ...rest
    }) {
      const inverse = surface === 'inverse';
      return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
        style: {
          background: inverse ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
          color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
          paddingTop: 'var(--section-pad)',
          paddingBottom: 'var(--section-pad)',
          ...style
        }
      }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-7)',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '28ch'
        }
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          font: 'var(--type-h2-fluid)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, title), lead ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-lead-fluid)',
          color: inverse ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
          margin: 'var(--space-4) 0 0'
        }
      }, lead) : null), actions ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          flexWrap: 'wrap'
        }
      }, actions) : null)));
    }
    Object.assign(W, {
      CTABand
    });
  })();

  /* ---- components/site/SiteFooter.jsx ---- */
  (function () {
    const Container = p => W.Container(p);
    function SiteFooter({
      brand = 'CTU',
      logo,
      blurb,
      groups = [],
      legal,
      surface = 'page',
      style,
      ...rest
    }) {
      const inverse = surface === 'inverse';
      const line = inverse ? 'var(--border-inverse)' : 'var(--border)';
      return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
        style: {
          background: inverse ? 'var(--bg-inverse)' : 'var(--bg-primary)',
          color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
          borderTop: '1px solid ' + line,
          paddingTop: 'var(--section-pad)',
          paddingBottom: 'var(--space-7)',
          ...style
        }
      }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: 'var(--stack-gap)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '28ch'
        }
      }, logo || /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-h3)',
          fontSize: 'var(--text-lg)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, brand), blurb ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: inverse ? 'rgba(233,238,242,.6)' : 'var(--text-secondary)',
          margin: 'var(--space-3) 0 0'
        }
      }, blurb) : null), groups.map(g => /*#__PURE__*/React.createElement("nav", {
        key: g.title,
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: inverse ? 'rgba(233,238,242,.5)' : 'var(--text-muted)'
        }
      }, g.title), g.links.map(l => /*#__PURE__*/React.createElement("a", {
        key: l.label,
        href: l.href || '#',
        style: {
          font: 'var(--type-small)',
          color: inverse ? 'var(--text-inverse)' : 'var(--text-secondary)'
        }
      }, l.label))))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          justifyContent: 'space-between',
          borderTop: '1px solid ' + line,
          marginTop: 'var(--section-pad)',
          paddingTop: 'var(--space-5)',
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: inverse ? 'rgba(233,238,242,.5)' : 'var(--text-muted)'
        }
      }, /*#__PURE__*/React.createElement("span", null, legal || '© ' + new Date().getFullYear() + ' ' + brand), /*#__PURE__*/React.createElement("span", null, "Set in Newsreader and Work Sans"))));
    }
    Object.assign(W, {
      SiteFooter
    });
  })();

  /* ---- components/site/Banner.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    function Banner({
      message,
      action,
      onDismiss,
      surface = 'lifted',
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          background: surface === 'inverse' ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
          color: surface === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)',
          borderBottom: '1px solid ' + (surface === 'inverse' ? 'var(--border-inverse)' : 'var(--border)'),
          padding: 'var(--space-3) var(--page-margin)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
          font: 'var(--type-small)',
          ...style
        }
      }), /*#__PURE__*/React.createElement("span", null, message), action, onDismiss ? /*#__PURE__*/React.createElement("button", {
        onClick: onDismiss,
        "aria-label": "Dismiss",
        style: {
          background: 'none',
          border: 0,
          cursor: 'pointer',
          color: 'inherit',
          display: 'inline-flex',
          marginLeft: 'auto'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "x",
        size: "sm"
      })) : null);
    }
    Object.assign(W, {
      Banner
    });
  })();

  /* ---- components/site/PricingCard.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    function PricingCard({
      name,
      price,
      period = 'per year',
      description,
      features = [],
      action,
      featured = false,
      style,
      ...rest
    }) {
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        style: {
          background: featured ? 'var(--bg-inverse)' : 'var(--bg-secondary)',
          color: featured ? 'var(--text-inverse)' : 'var(--text-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
          ...style
        }
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: featured ? 'var(--accent-soft)' : 'var(--text-muted)'
        }
      }, name), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--space-2)',
          marginTop: 'var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-h2)',
          letterSpacing: 'var(--tracking-display)'
        }
      }, price), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: featured ? 'rgba(233,238,242,.6)' : 'var(--text-muted)'
        }
      }, period)), description ? /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: featured ? 'rgba(233,238,242,.72)' : 'var(--text-secondary)',
          margin: 'var(--space-3) 0 0'
        }
      }, description) : null), /*#__PURE__*/React.createElement("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }
      }, features.map(ft => /*#__PURE__*/React.createElement("li", {
        key: ft,
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          font: 'var(--type-small)',
          color: featured ? 'rgba(233,238,242,.85)' : 'var(--text-secondary)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: "sm",
        color: featured ? 'var(--accent-soft)' : 'var(--accent)'
      }), ft))), action ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 'auto'
        }
      }, action) : null);
    }
    Object.assign(W, {
      PricingCard
    });
  })();

  /* ---- ui_kits/editorial/EditorialHome.jsx ---- */
  (function () {
    const Button = p => W.Button(p);
    const Tag = p => W.Tag(p);
    const Divider = p => W.Divider(p);
    const wrap = {
      maxWidth: 'var(--width-app)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    };
    function Eyebrow({
      children
    }) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-muted)'
        }
      }, children);
    }
    function Teaser({
      item,
      onOpen
    }) {
      return /*#__PURE__*/React.createElement("article", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)'
        }
      }, /*#__PURE__*/React.createElement(Eyebrow, null, item.kicker), /*#__PURE__*/React.createElement("h3", {
        onClick: onOpen,
        style: {
          font: 'var(--type-h4)',
          cursor: 'pointer'
        }
      }, item.title), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)',
          margin: 0
        }
      }, item.dek), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)'
        }
      }, item.meta));
    }
    const LATEST = [{
      kicker: 'Essay',
      title: 'The slow web',
      dek: 'What we lost when pages started loading instantly.',
      meta: '12 MIN · MAR 4'
    }, {
      kicker: 'Interview',
      title: 'Letters from the studio',
      dek: 'A bookbinder on working at the speed of glue.',
      meta: '9 MIN · FEB 26'
    }, {
      kicker: 'Note',
      title: 'Against the grid',
      dek: 'Asymmetry is not disorder.',
      meta: '4 MIN · FEB 19'
    }];
    function EditorialHome({
      onOpenArticle
    }) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
        style: {
          ...wrap,
          padding: 'var(--space-10) var(--space-6) var(--space-9)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: 'var(--space-9)',
          alignItems: 'end'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Issue eleven \u2014 March 2026"), /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-display)',
          margin: 'var(--space-4) 0 var(--space-5)'
        }
      }, "On patience"), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body-lg)',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--space-6)',
          maxWidth: '30ch'
        }
      }, "Three writers on the work that only reveals itself slowly."), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        iconRight: "arrow-right",
        onClick: onOpenArticle
      }, "Read the essay")), /*#__PURE__*/React.createElement("blockquote", {
        style: {
          margin: 0,
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-h4)',
          fontStyle: 'italic',
          margin: 0
        }
      }, "\u201CThe page is not a race. It is a room you agree to sit in.\u201D"), /*#__PURE__*/React.createElement("footer", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)',
          marginTop: 'var(--space-4)'
        }
      }, "MARGUERITE SOL, P. 14")))), /*#__PURE__*/React.createElement("section", {
        style: {
          background: 'var(--bg-secondary)',
          padding: 'var(--space-9) 0'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          font: 'var(--type-h3)'
        }
      }, "Latest"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-2)'
        }
      }, /*#__PURE__*/React.createElement(Tag, {
        active: true
      }, "All"), /*#__PURE__*/React.createElement(Tag, null, "Essays"), /*#__PURE__*/React.createElement(Tag, null, "Interviews"), /*#__PURE__*/React.createElement(Tag, null, "Notes"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-8)'
        }
      }, LATEST.map(i => /*#__PURE__*/React.createElement(Teaser, {
        key: i.title,
        item: i,
        onOpen: onOpenArticle
      }))))), /*#__PURE__*/React.createElement("section", {
        style: {
          ...wrap,
          padding: 'var(--space-10) var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-9)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "From the archive"), /*#__PURE__*/React.createElement(Divider, {
        spacing: "sm"
      }), ['A defence of the footnote', 'Reading in the margin', 'The typesetter’s week'].map((t, i) => /*#__PURE__*/React.createElement("div", {
        key: t,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: 'var(--space-4) 0',
          borderBottom: i < 2 ? '1px solid var(--border)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)'
        }
      }, t), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)'
        }
      }, 2024 - i)))), /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'var(--bg-inverse)',
          color: 'var(--text-inverse)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          font: 'var(--type-h3)',
          fontSize: 'var(--text-xl)'
        }
      }, "The monthly letter"), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          fontSize: 'var(--text-xs)',
          opacity: 0.75,
          margin: 'var(--space-3) 0 var(--space-6)'
        }
      }, "One essay, once a month. No round-ups, no news."), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: onOpenArticle
      }, "Subscribe")))));
    }
    Object.assign(W, {
      EditorialHome
    });
  })();

  /* ---- ui_kits/editorial/EditorialArticle.jsx ---- */
  (function () {
    const Breadcrumbs = p => W.Breadcrumbs(p);
    const Callout = p => W.Callout(p);
    const IconButton = p => W.IconButton(p);
    const Tag = p => W.Tag(p);
    function EditorialArticle() {
      return /*#__PURE__*/React.createElement("article", {
        style: {
          maxWidth: 'var(--width-app)',
          margin: '0 auto',
          padding: 'var(--space-8) var(--space-6) var(--space-10)'
        }
      }, /*#__PURE__*/React.createElement(Breadcrumbs, {
        items: [{
          label: 'Archive',
          href: '#'
        }, {
          label: '2026',
          href: '#'
        }, {
          label: 'On patience'
        }]
      }), /*#__PURE__*/React.createElement("header", {
        style: {
          maxWidth: 'var(--width-prose)',
          margin: 'var(--space-6) 0 var(--space-8)'
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-h1)'
        }
      }, "On patience"), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body-lg)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-4) 0 var(--space-5)'
        }
      }, "Every craft has a speed below which it stops being itself. Most of our tools are built to push past it."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-5)',
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)'
        }
      }, "MARGUERITE SOL \xB7 12 MIN \xB7 MAR 4, 2026"), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "bookmark",
        label: "Save for later"
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "share-2",
        label: "Share"
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'var(--width-prose) 1fr',
          gap: 'var(--space-9)',
          alignItems: 'start'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 'var(--width-prose)'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          margin: '0 0 var(--space-5)'
        }
      }, "A bookbinder I visited last winter keeps a clock in her workshop that runs, by her estimate, about four minutes slow. She has never fixed it. The glue takes as long as the glue takes, she told me, and the clock is only there to tell her when to eat."), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          margin: '0 0 var(--space-5)'
        }
      }, "This is not romanticism about hand work. It is a claim about materials. Paper absorbs at its own rate; thread relaxes overnight; a spine that is pressed too early will bow within a year. The craft is largely a schedule of waiting, punctuated by short intervals of decisive movement."), /*#__PURE__*/React.createElement("blockquote", {
        style: {
          margin: 'var(--space-7) 0',
          paddingLeft: 'var(--space-5)',
          borderLeft: '2px solid var(--accent)'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-h4)',
          fontStyle: 'italic',
          margin: 0
        }
      }, "\u201CYou cannot hurry a material into agreeing with you.\u201D")), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          margin: '0 0 var(--space-5)'
        }
      }, "Software has no such physics, and so it has invented none of the discipline. A draft can be published the second it is typed, which means the only remaining brake on a piece of writing is the writer's own willingness to wait."), /*#__PURE__*/React.createElement(Callout, {
        tone: "note",
        title: "Editor's note"
      }, "This essay appears in Issue Eleven alongside two shorter pieces on the same question."), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          margin: 'var(--space-5) 0 0'
        }
      }, "What follows is an argument for building that brake back in on purpose: fewer pieces, longer between them, and a house style that assumes the reader has sat down rather than glanced."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-2)',
          marginTop: 'var(--space-8)'
        }
      }, /*#__PURE__*/React.createElement(Tag, null, "Craft"), /*#__PURE__*/React.createElement(Tag, null, "Publishing"), /*#__PURE__*/React.createElement(Tag, null, "Issue Eleven"))), /*#__PURE__*/React.createElement("aside", {
        style: {
          position: 'sticky',
          top: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-muted)'
        }
      }, "In this issue"), /*#__PURE__*/React.createElement("ul", {
        style: {
          listStyle: 'none',
          padding: 0,
          margin: 'var(--space-3) 0 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }
      }, ['On patience', 'The slow web', 'Letters from the studio'].map((t, i) => /*#__PURE__*/React.createElement("li", {
        key: t,
        style: {
          font: 'var(--type-small)',
          color: i === 0 ? 'var(--accent)' : 'var(--text-secondary)'
        }
      }, t)))), /*#__PURE__*/React.createElement("div", {
        style: {
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-muted)',
          margin: 0
        }
      }, "Sidenotes sit in the margin at wide viewports and collapse inline below 900px.")))));
    }
    Object.assign(W, {
      EditorialArticle
    });
  })();

  /* ---- ui_kits/editorial/EditorialArchive.jsx ---- */
  (function () {
    const Tabs = p => W.Tabs(p);
    const Pagination = p => W.Pagination(p);
    const Input = p => W.Input(p);
    const ROWS = [['Mar 4, 2026', 'On patience', 'Essay', '12 min'], ['Feb 26, 2026', 'Letters from the studio', 'Interview', '9 min'], ['Feb 19, 2026', 'Against the grid', 'Note', '4 min'], ['Feb 5, 2026', 'A defence of the footnote', 'Essay', '11 min'], ['Jan 22, 2026', 'Reading in the margin', 'Note', '5 min'], ['Jan 8, 2026', 'The typesetter’s week', 'Interview', '14 min']];
    function EditorialArchive({
      onOpenArticle
    }) {
      const [page, setPage] = React.useState(1);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 'var(--width-app)',
          margin: '0 auto',
          padding: 'var(--space-8) var(--space-6) var(--space-10)'
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-h2)',
          marginBottom: 'var(--space-6)'
        }
      }, "Archive"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        items: [{
          id: 'all',
          label: 'All'
        }, {
          id: 'essays',
          label: 'Essays'
        }, {
          id: 'interviews',
          label: 'Interviews'
        }, {
          id: 'notes',
          label: 'Notes'
        }],
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 260
        }
      }, /*#__PURE__*/React.createElement(Input, {
        iconLeft: "search",
        placeholder: "Search the archive"
      }))), /*#__PURE__*/React.createElement("div", null, ROWS.map(([date, title, kind, mins], i) => /*#__PURE__*/React.createElement("div", {
        key: title,
        onClick: onOpenArticle,
        style: {
          display: 'grid',
          gridTemplateColumns: '140px 1fr 120px 80px',
          gap: 'var(--space-5)',
          alignItems: 'baseline',
          padding: 'var(--space-4) var(--space-3)',
          borderBottom: '1px solid var(--border)',
          cursor: 'pointer',
          background: i % 2 === 1 ? 'var(--bg-secondary)' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          color: 'var(--text-muted)'
        }
      }, date), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)'
        }
      }, title), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)'
        }
      }, kind), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-muted)',
          textAlign: 'right'
        }
      }, mins)))), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 'var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement(Pagination, {
        page: page,
        pageCount: 12,
        onChange: setPage
      })));
    }
    Object.assign(W, {
      EditorialArchive
    });
  })();

  /* ---- ui_kits/editorial/EditorialSubscribe.jsx ---- */
  (function () {
    const Field = p => W.Field(p);
    const Input = p => W.Input(p);
    const Radio = p => W.Radio(p);
    const Checkbox = p => W.Checkbox(p);
    const Button = p => W.Button(p);
    const Toast = p => W.Toast(p);
    function EditorialSubscribe() {
      const [sent, setSent] = React.useState(false);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 'var(--width-app)',
          margin: '0 auto',
          padding: 'var(--space-10) var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 460px',
          gap: 'var(--space-10)',
          alignItems: 'start'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-h1)'
        }
      }, "The monthly letter"), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body-lg)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-5) 0 0',
          maxWidth: '34ch'
        }
      }, "One essay, once a month. We do not send round-ups, launch announcements, or news."), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-muted)',
          marginTop: 'var(--space-6)'
        }
      }, "12,480 readers. Unsubscribe in one click, at any time.")), /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-7)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement(Field, {
        label: "Name",
        htmlFor: "n"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "n",
        placeholder: "Marguerite Sol"
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Email",
        required: true,
        hint: "We only write once a month.",
        htmlFor: "e"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "e",
        placeholder: "you@example.com"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-label)'
        }
      }, "Cadence"), /*#__PURE__*/React.createElement(Radio, {
        name: "cad",
        label: "Monthly letter",
        defaultChecked: true
      }), /*#__PURE__*/React.createElement(Radio, {
        name: "cad",
        label: "Monthly letter and new issues"
      })), /*#__PURE__*/React.createElement(Checkbox, {
        label: "Send me the printed edition when it ships."
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        onClick: () => setSent(true)
      }, "Subscribe"), sent ? /*#__PURE__*/React.createElement(Toast, {
        tone: "success",
        message: "Check your inbox to confirm.",
        onDismiss: () => setSent(false)
      }) : null)));
    }
    Object.assign(W, {
      EditorialSubscribe
    });
  })();

  /* ---- ui_kits/studio/StudioShell.jsx ---- */
  (function () {
    const Icon = p => W.Icon(p);
    const Logo = p => W.Logo(p);
    const NAV = [{
      id: 'drafts',
      label: 'Drafts',
      icon: 'file-text'
    }, {
      id: 'editor',
      label: 'Editor',
      icon: 'pencil-line'
    }, {
      id: 'settings',
      label: 'Settings',
      icon: 'settings'
    }];
    function StudioShell({
      view,
      onSelect,
      children
    }) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '236px 1fr',
          minHeight: '100vh',
          background: 'var(--bg-primary)'
        }
      }, /*#__PURE__*/React.createElement("aside", {
        style: {
          borderRight: '1px solid var(--border)',
          padding: 'var(--space-5) var(--space-4)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          padding: '0 var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement(Logo, {
        height: 30,
        variant: "mark"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-label)',
          color: 'var(--text-muted)'
        }
      }, "Studio")), /*#__PURE__*/React.createElement("nav", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-1)'
        }
      }, NAV.map(n => {
        const active = view === n.id;
        return /*#__PURE__*/React.createElement("button", {
          key: n.id,
          onClick: () => onSelect(n.id),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            background: 'none',
            border: 0,
            cursor: 'pointer',
            textAlign: 'left',
            padding: 'var(--space-2) var(--space-3)',
            font: 'var(--type-label)',
            color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
            borderLeft: '2px solid ' + (active ? 'var(--accent)' : 'transparent'),
            transition: 'var(--transition-color)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: n.icon,
          size: "sm",
          color: active ? 'var(--accent)' : 'var(--text-muted)'
        }), n.label);
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 'auto',
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          padding: 'var(--space-4) var(--space-3) 0'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'var(--accent-soft)',
          display: 'grid',
          placeItems: 'center',
          font: 'var(--type-mono)',
          color: 'var(--slate-900)'
        }
      }, "MS"), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)'
        }
      }, "Marguerite Sol"))), /*#__PURE__*/React.createElement("main", {
        style: {
          minWidth: 0
        }
      }, children));
    }
    Object.assign(W, {
      StudioShell
    });
  })();

  /* ---- ui_kits/studio/StudioDrafts.jsx ---- */
  (function () {
    const Table = p => W.Table(p);
    const Stat = p => W.Stat(p);
    const Badge = p => W.Badge(p);
    const Button = p => W.Button(p);
    const Input = p => W.Input(p);
    const Select = p => W.Select(p);
    const Dialog = p => W.Dialog(p);
    const ROWS = [{
      id: 1,
      title: 'On patience',
      status: 'Live',
      updated: 'Mar 4',
      reads: '8,204'
    }, {
      id: 2,
      title: 'The slow web',
      status: 'Draft',
      updated: 'Mar 2',
      reads: '—'
    }, {
      id: 3,
      title: 'Letters from the studio',
      status: 'Live',
      updated: 'Feb 26',
      reads: '3,911'
    }, {
      id: 4,
      title: 'Against the grid',
      status: 'Review',
      updated: 'Feb 21',
      reads: '—'
    }, {
      id: 5,
      title: 'A defence of the footnote',
      status: 'Live',
      updated: 'Feb 5',
      reads: '5,140'
    }];
    function StudioDrafts({
      onOpenEditor
    }) {
      const [open, setOpen] = React.useState(false);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-h2)'
        }
      }, "Drafts"), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-small)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-2) 0 0'
        }
      }, "Five pieces in flight for Issue Eleven.")), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        iconLeft: "plus",
        onClick: () => setOpen(true)
      }, "New piece")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-9)',
          paddingBottom: 'var(--space-6)',
          borderBottom: '1px solid var(--border)'
        }
      }, /*#__PURE__*/React.createElement(Stat, {
        label: "Subscribers",
        value: "12,480",
        note: "Up 4% this month."
      }), /*#__PURE__*/React.createElement(Stat, {
        label: "Median read",
        value: "6m 20s"
      }), /*#__PURE__*/React.createElement(Stat, {
        label: "Published",
        value: "148",
        note: "Since 2019."
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          margin: 'var(--space-6) 0'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 280
        }
      }, /*#__PURE__*/React.createElement(Input, {
        iconLeft: "search",
        placeholder: "Search drafts"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 180
        }
      }, /*#__PURE__*/React.createElement(Select, {
        options: ['All statuses', 'Draft', 'Review', 'Live']
      }))), /*#__PURE__*/React.createElement(Table, {
        columns: [{
          key: 'title',
          label: 'Title',
          render: r => /*#__PURE__*/React.createElement("span", {
            onClick: onOpenEditor,
            style: {
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }
          }, r.title)
        }, {
          key: 'status',
          label: 'Status',
          render: r => /*#__PURE__*/React.createElement(Badge, {
            tone: r.status === 'Live' ? 'success' : r.status === 'Review' ? 'warning' : 'neutral'
          }, r.status)
        }, {
          key: 'updated',
          label: 'Updated'
        }, {
          key: 'reads',
          label: 'Reads',
          align: 'right'
        }],
        rows: ROWS
      }), /*#__PURE__*/React.createElement(Dialog, {
        open: open,
        title: "Start a new piece",
        description: "It will be saved as a draft until you schedule it.",
        onClose: () => setOpen(false),
        footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: () => setOpen(false)
        }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            setOpen(false);
            onOpenEditor();
          }
        }, "Create draft"))
      }, /*#__PURE__*/React.createElement(Input, {
        placeholder: "Working title"
      })));
    }
    Object.assign(W, {
      StudioDrafts
    });
  })();

  /* ---- ui_kits/studio/StudioEditor.jsx ---- */
  (function () {
    const Button = p => W.Button(p);
    const IconButton = p => W.IconButton(p);
    const Badge = p => W.Badge(p);
    const Tag = p => W.Tag(p);
    const Field = p => W.Field(p);
    const Input = p => W.Input(p);
    const Select = p => W.Select(p);
    const Switch = p => W.Switch(p);
    const Toast = p => W.Toast(p);
    const Tooltip = p => W.Tooltip(p);
    function StudioEditor() {
      const [saved, setSaved] = React.useState(false);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          height: '100vh'
        }
      }, /*#__PURE__*/React.createElement("header", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          padding: 'var(--space-4) var(--space-6)',
          borderBottom: '1px solid var(--border)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-label)'
        }
      }, "On patience"), /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Review"), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Tooltip, {
        label: "Preview"
      }, /*#__PURE__*/React.createElement(IconButton, {
        icon: "eye",
        label: "Preview"
      })), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        onClick: () => setSaved(true)
      }, "Save draft"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm"
      }, "Schedule")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          minHeight: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          overflow: 'auto',
          padding: 'var(--space-8) var(--space-7)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 'var(--width-prose)',
          margin: '0 auto'
        }
      }, /*#__PURE__*/React.createElement("input", {
        defaultValue: "On patience",
        style: {
          font: 'var(--type-h2)',
          letterSpacing: 'var(--tracking-display)',
          border: 0,
          background: 'none',
          width: '100%',
          padding: 0,
          color: 'var(--text-primary)'
        }
      }), /*#__PURE__*/React.createElement("textarea", {
        defaultValue: 'A bookbinder I visited last winter keeps a clock in her workshop that runs, by her estimate, about four minutes slow. She has never fixed it.\n\nThe glue takes as long as the glue takes, she told me, and the clock is only there to tell her when to eat.',
        style: {
          marginTop: 'var(--space-5)',
          width: '100%',
          minHeight: 320,
          border: 0,
          background: 'none',
          resize: 'none',
          font: 'var(--type-body)',
          color: 'var(--text-secondary)',
          boxSizing: 'border-box'
        }
      }))), /*#__PURE__*/React.createElement("aside", {
        style: {
          borderLeft: '1px solid var(--border)',
          padding: 'var(--space-6) var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
          overflow: 'auto'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-muted)'
        }
      }, "Piece settings"), /*#__PURE__*/React.createElement(Field, {
        label: "Slug",
        htmlFor: "s"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "s",
        defaultValue: "on-patience"
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Section",
        htmlFor: "k"
      }, /*#__PURE__*/React.createElement(Select, {
        id: "k",
        options: ['Essay', 'Interview', 'Note']
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Publish date",
        htmlFor: "d"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "d",
        defaultValue: "Mar 4, 2026"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-label)'
        }
      }, "Tags"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-2)',
          flexWrap: 'wrap',
          marginTop: 'var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement(Tag, {
        onRemove: () => {}
      }, "Craft"), /*#__PURE__*/React.createElement(Tag, {
        onRemove: () => {}
      }, "Publishing"))), /*#__PURE__*/React.createElement(Switch, {
        label: "Show sidenotes in the margin."
      }), /*#__PURE__*/React.createElement(Switch, {
        label: "Include in the monthly letter."
      }), saved ? /*#__PURE__*/React.createElement(Toast, {
        message: "Draft saved.",
        onDismiss: () => setSaved(false)
      }) : null)));
    }
    Object.assign(W, {
      StudioEditor
    });
  })();

  /* ---- ui_kits/studio/StudioSettings.jsx ---- */
  (function () {
    const Tabs = p => W.Tabs(p);
    const Field = p => W.Field(p);
    const Input = p => W.Input(p);
    const Textarea = p => W.Textarea(p);
    const Checkbox = p => W.Checkbox(p);
    const Button = p => W.Button(p);
    const Divider = p => W.Divider(p);
    const Callout = p => W.Callout(p);
    function StudioSettings() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-7)',
          maxWidth: 820
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          font: 'var(--type-h2)'
        }
      }, "Settings"), /*#__PURE__*/React.createElement("div", {
        style: {
          margin: 'var(--space-6) 0'
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        items: [{
          id: 'pub',
          label: 'Publication'
        }, {
          id: 'letter',
          label: 'Letter'
        }, {
          id: 'team',
          label: 'Team'
        }]
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement(Field, {
        label: "Publication name",
        htmlFor: "p"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "p",
        defaultValue: "CTU"
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Description",
        hint: "Shown on the archive page and in the letter footer.",
        htmlFor: "d"
      }, /*#__PURE__*/React.createElement(Textarea, {
        id: "d",
        rows: 3,
        defaultValue: "One essay, once a month, on the work that only reveals itself slowly."
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Custom domain",
        htmlFor: "u"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "u",
        defaultValue: "ctu.example.com"
      })), /*#__PURE__*/React.createElement(Divider, {
        spacing: "sm"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        label: "Email me when a piece is submitted for review.",
        defaultChecked: true
      }), /*#__PURE__*/React.createElement(Checkbox, {
        label: "Allow readers to reply to the letter.",
        defaultChecked: true
      }), /*#__PURE__*/React.createElement(Checkbox, {
        label: "Show read counts on public pages."
      })), /*#__PURE__*/React.createElement(Callout, {
        tone: "warning",
        title: "Domain pending"
      }, "DNS changes can take up to 24 hours to propagate."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          marginTop: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "primary"
      }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost"
      }, "Discard"))));
    }
    Object.assign(W, {
      StudioSettings
    });
  })();

  /* ---- ui_kits/marketing/MarketingHome.jsx ---- */
  (function () {
    const Hero = p => W.Hero(p);
    const Section = p => W.Section(p);
    const Grid = p => W.Grid(p);
    const Quote = p => W.Quote(p);
    const Figure = p => W.Figure(p);
    const ArticleCard = p => W.ArticleCard(p);
    const CTABand = p => W.CTABand(p);
    const Button = p => W.Button(p);
    const Stat = p => W.Stat(p);
    const PIECES = [{
      kicker: 'Essay',
      title: 'On patience',
      dek: 'Every craft has a speed below which it stops being itself.',
      meta: '12 MIN · MAR 4'
    }, {
      kicker: 'Interview',
      title: 'Letters from the studio',
      dek: 'A bookbinder on working at the speed of glue.',
      meta: '9 MIN · FEB 26'
    }, {
      kicker: 'Note',
      title: 'Against the grid',
      dek: 'Asymmetry is not disorder.',
      meta: '4 MIN · FEB 19'
    }];
    function MarketingHome({
      onNavigate
    }) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
        eyebrow: "Issue eleven \u2014 March 2026",
        title: "On patience",
        lead: "CTU publishes one long essay a month on the work that only reveals itself slowly. No round-ups, no news.",
        actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          iconRight: "arrow-right",
          onClick: () => onNavigate('article')
        }, "Read the essay"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: () => onNavigate('pricing')
        }, "Become a member"))
      }), /*#__PURE__*/React.createElement(Section, {
        surface: "lifted",
        eyebrow: "In this issue",
        title: "Three pieces",
        actions: /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          iconRight: "arrow-right",
          onClick: () => onNavigate('article')
        }, "Read them all")
      }, /*#__PURE__*/React.createElement(Grid, {
        min: 260
      }, PIECES.map(p => /*#__PURE__*/React.createElement(ArticleCard, _extends({
        key: p.title
      }, p, {
        onClick: e => {
          e.preventDefault();
          onNavigate('article');
        }
      }))))), /*#__PURE__*/React.createElement(Section, {
        size: "lg"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: 'clamp(32px, 6vw, 72px)',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(Figure, {
        ratio: "4 / 3",
        caption: "The bindery, February.",
        credit: "PHOTO PENDING"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Quote, {
        size: "lg",
        quote: "You cannot hurry a material into agreeing with you.",
        attribution: "Marguerite Sol",
        source: "Issue Eleven"
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-body)',
          color: 'var(--text-secondary)',
          maxWidth: '46ch',
          marginTop: 'var(--space-6)'
        }
      }, "We started CTU because the writing we wanted to read was being published too quickly to be any good. Everything here is commissioned months ahead and edited until it is finished.")))), /*#__PURE__*/React.createElement(Section, {
        surface: "lifted",
        size: "sm"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(32px, 6vw, 96px)'
        }
      }, /*#__PURE__*/React.createElement(Stat, {
        label: "Readers",
        value: "12,480",
        note: "In 61 countries."
      }), /*#__PURE__*/React.createElement(Stat, {
        label: "Published since",
        value: "2019"
      }), /*#__PURE__*/React.createElement(Stat, {
        label: "Pieces a year",
        value: "12",
        note: "Never more."
      }))), /*#__PURE__*/React.createElement(CTABand, {
        title: "The monthly letter",
        lead: "One essay, once a month. Unsubscribe in one click.",
        actions: /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => onNavigate('contact')
        }, "Subscribe")
      }));
    }
    Object.assign(W, {
      MarketingHome
    });
  })();

  /* ---- ui_kits/marketing/MarketingPricing.jsx ---- */
  (function () {
    const Section = p => W.Section(p);
    const Grid = p => W.Grid(p);
    const PricingCard = p => W.PricingCard(p);
    const Accordion = p => W.Accordion(p);
    const Button = p => W.Button(p);
    function MarketingPricing({
      onNavigate
    }) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
        size: "lg",
        eyebrow: "Membership",
        title: "Read it all, keep it going",
        lead: "CTU is funded by readers. There is no advertising and there never will be."
      }, /*#__PURE__*/React.createElement(Grid, {
        min: 260
      }, /*#__PURE__*/React.createElement(PricingCard, {
        name: "Letter",
        price: "Free",
        period: "forever",
        description: "The monthly essay in your inbox.",
        features: ['One essay a month.', 'Full archive after 90 days.'],
        action: /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          fullWidth: true,
          onClick: () => onNavigate('contact')
        }, "Subscribe")
      }), /*#__PURE__*/React.createElement(PricingCard, {
        name: "Reader",
        price: "$60",
        period: "per year",
        featured: true,
        description: "Everything, the day it is published.",
        features: ['Every piece, immediately.', 'The full archive.', 'Two printed editions a year.'],
        action: /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          fullWidth: true,
          onClick: () => onNavigate('contact')
        }, "Become a member")
      }), /*#__PURE__*/React.createElement(PricingCard, {
        name: "Patron",
        price: "$240",
        period: "per year",
        description: "For readers who want to commission work.",
        features: ['Everything in Reader.', 'Your name in the colophon.', 'A say in what we commission.'],
        action: /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          fullWidth: true,
          onClick: () => onNavigate('contact')
        }, "Become a patron")
      }))), /*#__PURE__*/React.createElement(Section, {
        surface: "lifted",
        width: "prose",
        title: "Questions"
      }, /*#__PURE__*/React.createElement(Accordion, {
        items: [{
          id: 'a',
          question: 'How often do you publish?',
          answer: 'Once a month, on the first Wednesday. Occasionally a short note in between.'
        }, {
          id: 'b',
          question: 'Can I read without paying?',
          answer: 'Yes. Every piece opens to everyone after ninety days, and the monthly letter is free.'
        }, {
          id: 'c',
          question: 'Is there a print edition?',
          answer: 'Twice a year, in spring and autumn, posted to Reader and Patron members.'
        }, {
          id: 'd',
          question: 'Can I cancel?',
          answer: 'In one click, at any time. We refund the unused months without asking why.'
        }]
      })));
    }
    Object.assign(W, {
      MarketingPricing
    });
  })();

  /* ---- ui_kits/marketing/MarketingContact.jsx ---- */
  (function () {
    const Section = p => W.Section(p);
    const Prose = p => W.Prose(p);
    const Field = p => W.Field(p);
    const Input = p => W.Input(p);
    const Textarea = p => W.Textarea(p);
    const Select = p => W.Select(p);
    const Checkbox = p => W.Checkbox(p);
    const Button = p => W.Button(p);
    const Toast = p => W.Toast(p);
    function MarketingContact() {
      const [sent, setSent] = React.useState(false);
      return /*#__PURE__*/React.createElement(Section, {
        size: "lg",
        eyebrow: "Write to us",
        title: "Pitches, letters, corrections"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'clamp(32px, 6vw, 80px)',
          alignItems: 'start'
        }
      }, /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "We read every message, though it can take a fortnight to reply. Pitches should be a paragraph on the idea and a paragraph on why you are the person to write it."), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Corrections go to the top of the pile. If we got something wrong we will say so in the piece itself."), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-mono)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          margin: 0
        }
      }, "EDITORIAL@WARM.EXAMPLE \u2014 14 GLEBE ROW, LONDON")), /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement(Field, {
        label: "Name",
        htmlFor: "c-n"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "c-n",
        placeholder: "Marguerite Sol"
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Email",
        required: true,
        htmlFor: "c-e"
      }, /*#__PURE__*/React.createElement(Input, {
        id: "c-e",
        placeholder: "you@example.com"
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Subject",
        htmlFor: "c-s"
      }, /*#__PURE__*/React.createElement(Select, {
        id: "c-s",
        options: ['A pitch', 'A letter to the editor', 'A correction', 'Membership']
      })), /*#__PURE__*/React.createElement(Field, {
        label: "Message",
        hint: "A few paragraphs is plenty.",
        htmlFor: "c-m"
      }, /*#__PURE__*/React.createElement(Textarea, {
        id: "c-m",
        rows: 5
      })), /*#__PURE__*/React.createElement(Checkbox, {
        label: "Send me the monthly letter as well."
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        onClick: () => setSent(true)
      }, "Send"), sent ? /*#__PURE__*/React.createElement(Toast, {
        tone: "success",
        message: "Thank you. We will reply within a fortnight.",
        onDismiss: () => setSent(false)
      }) : null)));
    }
    Object.assign(W, {
      MarketingContact
    });
  })();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview-bundle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial/EditorialArchive.jsx
try { (() => {
const ROWS = [['Mar 4, 2026', 'On patience', 'Essay', '12 min'], ['Feb 26, 2026', 'Letters from the studio', 'Interview', '9 min'], ['Feb 19, 2026', 'Against the grid', 'Note', '4 min'], ['Feb 5, 2026', 'A defence of the footnote', 'Essay', '11 min'], ['Jan 22, 2026', 'Reading in the margin', 'Note', '5 min'], ['Jan 8, 2026', 'The typesetter’s week', 'Interview', '14 min']];
function EditorialArchive({
  onOpenArticle
}) {
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-app)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)',
      marginBottom: 'var(--space-6)'
    }
  }, "Archive"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'essays',
      label: 'Essays'
    }, {
      id: 'interviews',
      label: 'Interviews'
    }, {
      id: 'notes',
      label: 'Notes'
    }],
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    iconLeft: "search",
    placeholder: "Search the archive"
  }))), /*#__PURE__*/React.createElement("div", null, ROWS.map(([date, title, kind, mins], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    onClick: onOpenArticle,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr 120px 80px',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-4) var(--space-3)',
      borderBottom: '1px solid var(--border)',
      cursor: 'pointer',
      background: i % 2 === 1 ? 'var(--bg-secondary)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)'
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, mins)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pagination, {
    page: page,
    pageCount: 12,
    onChange: setPage
  })));
}
Object.assign(__ds_scope, { EditorialArchive });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial/EditorialArchive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial/EditorialArticle.jsx
try { (() => {
function EditorialArticle() {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--width-app)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumbs, {
    items: [{
      label: 'Archive',
      href: '#'
    }, {
      label: '2026',
      href: '#'
    }, {
      label: 'On patience'
    }]
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: 'var(--width-prose)',
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)'
    }
  }, "On patience"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "Every craft has a speed below which it stops being itself. Most of our tools are built to push past it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)'
    }
  }, "MARGUERITE SOL \xB7 12 MIN \xB7 MAR 4, 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bookmark",
    label: "Save for later"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "share-2",
    label: "Share"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--width-prose) 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '0 0 var(--space-5)'
    }
  }, "A bookbinder I visited last winter keeps a clock in her workshop that runs, by her estimate, about four minutes slow. She has never fixed it. The glue takes as long as the glue takes, she told me, and the clock is only there to tell her when to eat."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '0 0 var(--space-5)'
    }
  }, "This is not romanticism about hand work. It is a claim about materials. Paper absorbs at its own rate; thread relaxes overnight; a spine that is pressed too early will bow within a year. The craft is largely a schedule of waiting, punctuated by short intervals of decisive movement."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 'var(--space-7) 0',
      paddingLeft: 'var(--space-5)',
      borderLeft: '2px solid var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h4)',
      fontStyle: 'italic',
      margin: 0
    }
  }, "\u201CYou cannot hurry a material into agreeing with you.\u201D")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '0 0 var(--space-5)'
    }
  }, "Software has no such physics, and so it has invented none of the discipline. A draft can be published the second it is typed, which means the only remaining brake on a piece of writing is the writer's own willingness to wait."), /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    tone: "note",
    title: "Editor's note"
  }, "This essay appears in Issue Eleven alongside two shorter pieces on the same question."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: 'var(--space-5) 0 0'
    }
  }, "What follows is an argument for building that brake back in on purpose: fewer pieces, longer between them, and a house style that assumes the reader has sat down rather than glanced."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Craft"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Publishing"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Issue Eleven"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, "In this issue"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-3) 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ['On patience', 'The slow web', 'Letters from the studio'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      font: 'var(--type-small)',
      color: i === 0 ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Sidenotes sit in the margin at wide viewports and collapse inline below 900px.")))));
}
Object.assign(__ds_scope, { EditorialArticle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial/EditorialArticle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial/EditorialHome.jsx
try { (() => {
const wrap = {
  maxWidth: 'var(--width-app)',
  margin: '0 auto',
  padding: '0 var(--space-6)'
};
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, children);
}
function Teaser({
  item,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, item.kicker), /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      font: 'var(--type-h4)',
      cursor: 'pointer'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, item.dek), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)'
    }
  }, item.meta));
}
const LATEST = [{
  kicker: 'Essay',
  title: 'The slow web',
  dek: 'What we lost when pages started loading instantly.',
  meta: '12 MIN · MAR 4'
}, {
  kicker: 'Interview',
  title: 'Letters from the studio',
  dek: 'A bookbinder on working at the speed of glue.',
  meta: '9 MIN · FEB 26'
}, {
  kicker: 'Note',
  title: 'Against the grid',
  dek: 'Asymmetry is not disorder.',
  meta: '4 MIN · FEB 19'
}];
function EditorialHome({
  onOpenArticle
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-10) var(--space-6) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Issue eleven \u2014 March 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "On patience"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-6)',
      maxWidth: '30ch'
    }
  }, "Three writers on the work that only reveals itself slowly."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: onOpenArticle
  }, "Read the essay")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h4)',
      fontStyle: 'italic',
      margin: 0
    }
  }, "\u201CThe page is not a race. It is a room you agree to sit in.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)'
    }
  }, "MARGUERITE SOL, P. 14")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-secondary)',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Latest"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    active: true
  }, "All"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Essays"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Interviews"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Notes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, LATEST.map(i => /*#__PURE__*/React.createElement(Teaser, {
    key: i.title,
    item: i,
    onOpen: onOpenArticle
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-10) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "From the archive"), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    spacing: "sm"
  }), ['A defence of the footnote', 'Reading in the margin', 'The typesetter’s week'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--space-4) 0',
      borderBottom: i < 2 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-muted)'
    }
  }, 2024 - i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-xl)'
    }
  }, "The monthly letter"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      opacity: 0.75,
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, "One essay, once a month. No round-ups, no news."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onOpenArticle
  }, "Subscribe")))));
}
Object.assign(__ds_scope, { EditorialHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial/EditorialHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial/EditorialSubscribe.jsx
try { (() => {
function EditorialSubscribe() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-app)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 460px',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)'
    }
  }, "The monthly letter"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      margin: 'var(--space-5) 0 0',
      maxWidth: '34ch'
    }
  }, "One essay, once a month. We do not send round-ups, launch announcements, or news."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-6)'
    }
  }, "12,480 readers. Unsubscribe in one click, at any time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "n",
    placeholder: "Marguerite Sol"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    required: true,
    hint: "We only write once a month.",
    htmlFor: "e"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "e",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Cadence"), /*#__PURE__*/React.createElement(__ds_scope.Radio, {
    name: "cad",
    label: "Monthly letter",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Radio, {
    name: "cad",
    label: "Monthly letter and new issues"
  })), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Send me the printed edition when it ships."
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Subscribe"), sent ? /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "success",
    message: "Check your inbox to confirm.",
    onDismiss: () => setSent(false)
  }) : null)));
}
Object.assign(__ds_scope, { EditorialSubscribe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial/EditorialSubscribe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingContact.jsx
try { (() => {
function MarketingContact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    size: "lg",
    eyebrow: "Write to us",
    title: "Pitches, letters, corrections"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
      gap: 'clamp(32px, 6vw, 80px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Prose, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We read every message, though it can take a fortnight to reply. Pitches should be a paragraph on the idea and a paragraph on why you are the person to write it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Corrections go to the top of the pile. If we got something wrong we will say so in the piece itself."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "EDITORIAL@WARM.EXAMPLE \u2014 14 GLEBE ROW, LONDON")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(24px, 4vw, 40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    htmlFor: "c-n"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "c-n",
    placeholder: "Marguerite Sol"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    required: true,
    htmlFor: "c-e"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "c-e",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Subject",
    htmlFor: "c-s"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "c-s",
    options: ['A pitch', 'A letter to the editor', 'A correction', 'Membership']
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Message",
    hint: "A few paragraphs is plenty.",
    htmlFor: "c-m"
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "c-m",
    rows: 5
  })), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Send me the monthly letter as well."
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send"), sent ? /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "success",
    message: "Thank you. We will reply within a fortnight.",
    onDismiss: () => setSent(false)
  }) : null)));
}
Object.assign(__ds_scope, { MarketingContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingHome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PIECES = [{
  kicker: 'Essay',
  title: 'On patience',
  dek: 'Every craft has a speed below which it stops being itself.',
  meta: '12 MIN · MAR 4'
}, {
  kicker: 'Interview',
  title: 'Letters from the studio',
  dek: 'A bookbinder on working at the speed of glue.',
  meta: '9 MIN · FEB 26'
}, {
  kicker: 'Note',
  title: 'Against the grid',
  dek: 'Asymmetry is not disorder.',
  meta: '4 MIN · FEB 19'
}];
function MarketingHome({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Hero, {
    eyebrow: "Issue eleven \u2014 March 2026",
    title: "On patience",
    lead: "CTU publishes one long essay a month on the work that only reveals itself slowly. No round-ups, no news.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      iconRight: "arrow-right",
      onClick: () => onNavigate('article')
    }, "Read the essay"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      onClick: () => onNavigate('pricing')
    }, "Become a member"))
  }), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    surface: "lifted",
    eyebrow: "In this issue",
    title: "Three pieces",
    actions: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => onNavigate('article')
    }, "Read them all")
  }, /*#__PURE__*/React.createElement(__ds_scope.Grid, {
    min: 260
  }, PIECES.map(p => /*#__PURE__*/React.createElement(__ds_scope.ArticleCard, _extends({
    key: p.title
  }, p, {
    onClick: e => {
      e.preventDefault();
      onNavigate('article');
    }
  }))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    size: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
      gap: 'clamp(32px, 6vw, 72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Figure, {
    ratio: "4 / 3",
    caption: "The bindery, February.",
    credit: "PHOTO PENDING"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Quote, {
    size: "lg",
    quote: "You cannot hurry a material into agreeing with you.",
    attribution: "Marguerite Sol",
    source: "Issue Eleven"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch',
      marginTop: 'var(--space-6)'
    }
  }, "We started CTU because the writing we wanted to read was being published too quickly to be any good. Everything here is commissioned months ahead and edited until it is finished.")))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    surface: "lifted",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(32px, 6vw, 96px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Readers",
    value: "12,480",
    note: "In 61 countries."
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Published since",
    value: "2019"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Pieces a year",
    value: "12",
    note: "Never more."
  }))), /*#__PURE__*/React.createElement(__ds_scope.CTABand, {
    title: "The monthly letter",
    lead: "One essay, once a month. Unsubscribe in one click.",
    actions: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      onClick: () => onNavigate('contact')
    }, "Subscribe")
  }));
}
Object.assign(__ds_scope, { MarketingHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingPricing.jsx
try { (() => {
function MarketingPricing({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    size: "lg",
    eyebrow: "Membership",
    title: "Read it all, keep it going",
    lead: "CTU is funded by readers. There is no advertising and there never will be."
  }, /*#__PURE__*/React.createElement(__ds_scope.Grid, {
    min: 260
  }, /*#__PURE__*/React.createElement(__ds_scope.PricingCard, {
    name: "Letter",
    price: "Free",
    period: "forever",
    description: "The monthly essay in your inbox.",
    features: ['One essay a month.', 'Full archive after 90 days.'],
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => onNavigate('contact')
    }, "Subscribe")
  }), /*#__PURE__*/React.createElement(__ds_scope.PricingCard, {
    name: "Reader",
    price: "$60",
    period: "per year",
    featured: true,
    description: "Everything, the day it is published.",
    features: ['Every piece, immediately.', 'The full archive.', 'Two printed editions a year.'],
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate('contact')
    }, "Become a member")
  }), /*#__PURE__*/React.createElement(__ds_scope.PricingCard, {
    name: "Patron",
    price: "$240",
    period: "per year",
    description: "For readers who want to commission work.",
    features: ['Everything in Reader.', 'Your name in the colophon.', 'A say in what we commission.'],
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => onNavigate('contact')
    }, "Become a patron")
  }))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    surface: "lifted",
    width: "prose",
    title: "Questions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    items: [{
      id: 'a',
      question: 'How often do you publish?',
      answer: 'Once a month, on the first Wednesday. Occasionally a short note in between.'
    }, {
      id: 'b',
      question: 'Can I read without paying?',
      answer: 'Yes. Every piece opens to everyone after ninety days, and the monthly letter is free.'
    }, {
      id: 'c',
      question: 'Is there a print edition?',
      answer: 'Twice a year, in spring and autumn, posted to Reader and Patron members.'
    }, {
      id: 'd',
      question: 'Can I cancel?',
      answer: 'In one click, at any time. We refund the unused months without asking why.'
    }]
  })));
}
Object.assign(__ds_scope, { MarketingPricing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingPricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/StudioDrafts.jsx
try { (() => {
const ROWS = [{
  id: 1,
  title: 'On patience',
  status: 'Live',
  updated: 'Mar 4',
  reads: '8,204'
}, {
  id: 2,
  title: 'The slow web',
  status: 'Draft',
  updated: 'Mar 2',
  reads: '—'
}, {
  id: 3,
  title: 'Letters from the studio',
  status: 'Live',
  updated: 'Feb 26',
  reads: '3,911'
}, {
  id: 4,
  title: 'Against the grid',
  status: 'Review',
  updated: 'Feb 21',
  reads: '—'
}, {
  id: 5,
  title: 'A defence of the footnote',
  status: 'Live',
  updated: 'Feb 5',
  reads: '5,140'
}];
function StudioDrafts({
  onOpenEditor
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Drafts"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)',
      margin: 'var(--space-2) 0 0'
    }
  }, "Five pieces in flight for Issue Eleven.")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconLeft: "plus",
    onClick: () => setOpen(true)
  }, "New piece")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)',
      paddingBottom: 'var(--space-6)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Subscribers",
    value: "12,480",
    note: "Up 4% this month."
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Median read",
    value: "6m 20s"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    label: "Published",
    value: "148",
    note: "Since 2019."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      margin: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    iconLeft: "search",
    placeholder: "Search drafts"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    options: ['All statuses', 'Draft', 'Review', 'Live']
  }))), /*#__PURE__*/React.createElement(__ds_scope.Table, {
    columns: [{
      key: 'title',
      label: 'Title',
      render: r => /*#__PURE__*/React.createElement("span", {
        onClick: onOpenEditor,
        style: {
          cursor: 'pointer',
          color: 'var(--text-primary)'
        }
      }, r.title)
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
        tone: r.status === 'Live' ? 'success' : r.status === 'Review' ? 'warning' : 'neutral'
      }, r.status)
    }, {
      key: 'updated',
      label: 'Updated'
    }, {
      key: 'reads',
      label: 'Reads',
      align: 'right'
    }],
    rows: ROWS
  }), /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: open,
    title: "Start a new piece",
    description: "It will be saved as a draft until you schedule it.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      onClick: () => {
        setOpen(false);
        onOpenEditor();
      }
    }, "Create draft"))
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "Working title"
  })));
}
Object.assign(__ds_scope, { StudioDrafts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/StudioDrafts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/StudioEditor.jsx
try { (() => {
function StudioEditor() {
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-6)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "On patience"), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning"
  }, "Review"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    label: "Preview"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "eye",
    label: "Preview"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setSaved(true)
  }, "Save draft"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Schedule")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: 'var(--space-8) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    defaultValue: "On patience",
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--tracking-display)',
      border: 0,
      background: 'none',
      width: '100%',
      padding: 0,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: 'A bookbinder I visited last winter keeps a clock in her workshop that runs, by her estimate, about four minutes slow. She has never fixed it.\n\nThe glue takes as long as the glue takes, she told me, and the clock is only there to tell her when to eat.',
    style: {
      marginTop: 'var(--space-5)',
      width: '100%',
      minHeight: 320,
      border: 0,
      background: 'none',
      resize: 'none',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--border)',
      padding: 'var(--space-6) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, "Piece settings"), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Slug",
    htmlFor: "s"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "s",
    defaultValue: "on-patience"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Section",
    htmlFor: "k"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "k",
    options: ['Essay', 'Interview', 'Note']
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Publish date",
    htmlFor: "d"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "d",
    defaultValue: "Mar 4, 2026"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)'
    }
  }, "Tags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    onRemove: () => {}
  }, "Craft"), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    onRemove: () => {}
  }, "Publishing"))), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    label: "Show sidenotes in the margin."
  }), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    label: "Include in the monthly letter."
  }), saved ? /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    message: "Draft saved.",
    onDismiss: () => setSaved(false)
  }) : null)));
}
Object.assign(__ds_scope, { StudioEditor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/StudioEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/StudioSettings.jsx
try { (() => {
function StudioSettings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    items: [{
      id: 'pub',
      label: 'Publication'
    }, {
      id: 'letter',
      label: 'Letter'
    }, {
      id: 'team',
      label: 'Team'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Publication name",
    htmlFor: "p"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "p",
    defaultValue: "CTU"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Description",
    hint: "Shown on the archive page and in the letter footer.",
    htmlFor: "d"
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "d",
    rows: 3,
    defaultValue: "One essay, once a month, on the work that only reveals itself slowly."
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Custom domain",
    htmlFor: "u"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "u",
    defaultValue: "ctu.example.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    spacing: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Email me when a piece is submitted for review.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Allow readers to reply to the letter.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Show read counts on public pages."
  })), /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    tone: "warning",
    title: "Domain pending"
  }, "DNS changes can take up to 24 hours to propagate."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary"
  }, "Save changes"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost"
  }, "Discard"))));
}
Object.assign(__ds_scope, { StudioSettings });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/StudioSettings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio/StudioShell.jsx
try { (() => {
const NAV = [{
  id: 'drafts',
  label: 'Drafts',
  icon: 'file-text'
}, {
  id: 'editor',
  label: 'Editor',
  icon: 'pencil-line'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
function StudioShell({
  view,
  onSelect,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '236px 1fr',
      minHeight: '100vh',
      background: 'var(--bg-primary)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--border)',
      padding: 'var(--space-5) var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 30,
    variant: "mark"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, "Studio")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, NAV.map(n => {
    const active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onSelect(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'var(--space-2) var(--space-3)',
        font: 'var(--type-label)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderLeft: '2px solid ' + (active ? 'var(--accent)' : 'transparent'),
        transition: 'var(--transition-color)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: n.icon,
      size: "sm",
      color: active ? 'var(--accent)' : 'var(--text-muted)'
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-3) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--accent-soft)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--type-mono)',
      color: 'var(--slate-900)'
    }
  }, "MS"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, "Marguerite Sol"))), /*#__PURE__*/React.createElement("main", {
    style: {
      minWidth: 0
    }
  }, children));
}
Object.assign(__ds_scope, { StudioShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio/StudioShell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.Grid = __ds_scope.Grid;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.EditorialArchive = __ds_scope.EditorialArchive;

__ds_ns.EditorialArticle = __ds_scope.EditorialArticle;

__ds_ns.EditorialHome = __ds_scope.EditorialHome;

__ds_ns.EditorialSubscribe = __ds_scope.EditorialSubscribe;

__ds_ns.MarketingContact = __ds_scope.MarketingContact;

__ds_ns.MarketingHome = __ds_scope.MarketingHome;

__ds_ns.MarketingPricing = __ds_scope.MarketingPricing;

__ds_ns.StudioDrafts = __ds_scope.StudioDrafts;

__ds_ns.StudioEditor = __ds_scope.StudioEditor;

__ds_ns.StudioSettings = __ds_scope.StudioSettings;

__ds_ns.StudioShell = __ds_scope.StudioShell;

})();
