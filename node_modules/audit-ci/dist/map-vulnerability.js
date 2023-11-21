"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapVulnerabilityLevelInput = void 0;
function mapVulnerabilityLevelInput({ low, l, moderate, m, high, h, critical, c, }) {
    if (low || l) {
        return { low: true, moderate: true, high: true, critical: true };
    }
    if (moderate || m) {
        return { low: false, moderate: true, high: true, critical: true };
    }
    if (high || h) {
        return { low: false, moderate: false, high: true, critical: true };
    }
    if (critical || c) {
        return { low: false, moderate: false, high: false, critical: true };
    }
    return { low: false, moderate: false, high: false, critical: false };
}
exports.mapVulnerabilityLevelInput = mapVulnerabilityLevelInput;
//# sourceMappingURL=map-vulnerability.js.map