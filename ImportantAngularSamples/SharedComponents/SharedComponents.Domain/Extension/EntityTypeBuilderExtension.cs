using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SharedComponents.Domain.Common;

namespace SharedComponents.Domain.Extension
{
    public static class EntityTypeBuilderExtension
    {
        public static EntityTypeBuilder<TEntity>ToTable<TEntity>(this EntityTypeBuilder<TEntity> entityTypeBuilder, string name) where TEntity : class
        {
            return entityTypeBuilder.ToTable("sst_integrations_api_mapping", BaseConnection.SchemName);
        }
    }
}   