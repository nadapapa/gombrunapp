declare var NSObject, NSString, android, java;

export class MagicService {

  public static TEMPLATE_URL(path: string, platformSpecific?: boolean): string {
    if (MagicService.IS_NATIVESCRIPT()) {
      let paths = path.split('.');
      paths.splice(-1);
      let platform = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
      return `${paths.join('.')}.${platform}.html`;
    } else {
      return path;
    }
  }

  public static STYLE_URLS(paths: string[], platformSpecific?: boolean): string[] {
    if (MagicService.IS_NATIVESCRIPT()) {
      return paths.map((path) => {
        let parts = path.split('.');
        parts.splice(-1);
        let platform = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
        return `${parts.join('.')}.${platform}.css`;
      });
    } else {
      return paths;
    }
  }

  public static IS_NATIVESCRIPT() {
    return (MagicService.IS_IOS() || MagicService.IS_ANDROID());
  }

  public static IS_IOS() {
    return (typeof NSObject !== 'undefined' && typeof NSString !== 'undefined');
  }

  public static IS_ANDROID() {
    return (typeof android !== 'undefined' && typeof java !== 'undefined');
  }
}
