using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace SharedComponents.Domain.Common
{
    public static class Utatlties
    {
        public static byte[] ObjectToByteArray(object obj)
        {
            if (obj == null)
            {
                obj = string.Empty;
            }

            BinaryFormatter bf = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }
        public static object ByteToObject(byte[] data)
        {
            if (data == null)
            {
                return string.Empty;
            }

            BinaryFormatter bf = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream(data))
            {
                return bf.Deserialize(ms);
            }
        }
    }
}