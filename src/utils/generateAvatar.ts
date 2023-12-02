import Avatar from '../models/avatar-model';

function generateAvatar(
  obj: FileList | null | undefined
): Promise<Avatar | null> {
  return new Promise((resolve) => {
    if (!obj || !obj.length) return resolve(null);

    const file: File = obj[0];

    const avatarObj: Avatar = {
      size: file.size,
      ext: file.type,
      pic: '',
    };

    const reader = new FileReader();

    reader.onloadend = (res: ProgressEvent<FileReader>) => {
      avatarObj.pic = res.target!.result ? <string>res.target!.result : null;

      return resolve(avatarObj);
    };

    reader.readAsDataURL(file);
  });
}

export default generateAvatar;
