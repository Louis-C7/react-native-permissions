import type {AndroidPermissionMap} from './permissions.android';
import { HarmonyPermissionMap } from './permissions.harmony';
import type {IOSPermissionMap} from './permissions.ios';
import type {WindowsPermissionMap} from './permissions.windows';

export const PERMISSIONS = Object.freeze({
  ANDROID: {} as AndroidPermissionMap,
  IOS: {} as IOSPermissionMap,
  WINDOWS: {} as WindowsPermissionMap,
  HARMONY: {} as HarmonyPermissionMap
} as const);
