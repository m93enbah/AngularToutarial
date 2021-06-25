using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Service.Utilites
{
    public static class StaticPage
    {
        /// <summary>
        /// used for symmetric encrytpion algorithm to encrypt query string.
        /// To Do : it was Read from web config, Later On Want to read data From Setup.
        /// </summary>
        public static class Encryption
        {
            public static string SaltValue
            {
                get
                {
                    return "ABCD";
                }

            }
            public static string PassPhrase
            {
                get
                {
                    return "ABCD";
                }
            }
            public static string HashAlgorithm
            {
                get
                {
                    return "SHA1";
                }
            }
            public static string InitVector
            {
                get
                {
                    return "@1B2c3D4e5F6g7H8";
                }
            }
            public static int KeySize
            {
                get
                {
                    return 256;
                }
            }
            public static int PasswordIteration
            {
                get
                {
                    return 2;
                }
            }
        }
    }
}