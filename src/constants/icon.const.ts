/* types icons */
type statusIcon =
 | 'eye'
 | 'edit'
 | 'view'
 | 'hidde'
 | 'enable'
 | 'expand'
 | 'create'
 | 'refresh'
 | 'default'
 | 'XCircle'
 | 'arrow-left'
 | 'eliminated'
 | 'EyeSlashIcon'
 | 'MicrophoneIcon'
 | 'MagnifyingGlassIcon';
const typesIcon = Object.freeze({
 eye: 'eye',
 view: 'view',
 edit: 'edit',
 hidde: 'hidde',
 enable: 'enable',
 expand: 'expand',
 create: 'create',
 default: 'default',
 refresh: 'refresh',
 XCircle: 'XCircle',
 elimited: 'eliminated',
 arrowLeft: 'arrow-left',
 EyeSlashIcon: 'EyeSlashIcon',
 MicrophoneIcon: 'MicrophoneIcon',
 MagnifyingGlassIcon: 'MagnifyingGlassIcon',
});
export { typesIcon };
export type { statusIcon };
