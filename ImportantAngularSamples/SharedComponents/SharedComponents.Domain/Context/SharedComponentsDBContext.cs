using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SharedComponents.Domain.Models;

namespace DOMAIN.Context
{
    public partial class SharedComponentsDBContext : DbContext
    {
        public SharedComponentsDBContext()
        {
        }

        public SharedComponentsDBContext(DbContextOptions<SharedComponentsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CpEpaymentTransactions> CpEpaymentTransactions { get; set; }
        public virtual DbSet<CpUserProperties> CpUserProperties { get; set; }
        public virtual DbSet<SpdComponents> SpdComponents { get; set; }
        public virtual DbSet<SpdContainers> SpdContainers { get; set; }
        public virtual DbSet<SpdControlValues> SpdControlValues { get; set; }
        public virtual DbSet<SpdFormControls> SpdFormControls { get; set; }
        public virtual DbSet<SpdProducts> SpdProducts { get; set; }
        public virtual DbSet<SpdProductsDetails> SpdProductsDetails { get; set; }
        public virtual DbSet<SpdProductsSteps> SpdProductsSteps { get; set; }
        public virtual DbSet<SpdSequences> SpdSequences { get; set; }
        public virtual DbSet<SpdSequencesDetails> SpdSequencesDetails { get; set; }
        public virtual DbSet<SpdStepsTransactions> SpdStepsTransactions { get; set; }
        public virtual DbSet<SstActions> SstActions { get; set; }
        public virtual DbSet<SstAgentStructures> SstAgentStructures { get; set; }
        public virtual DbSet<SstAlerts> SstAlerts { get; set; }
        public virtual DbSet<SstBusinessChannels> SstBusinessChannels { get; set; }
        public virtual DbSet<SstChannelPlans> SstChannelPlans { get; set; }
        public virtual DbSet<SstChannelTypes> SstChannelTypes { get; set; }
        public virtual DbSet<SstClaimDiscounts> SstClaimDiscounts { get; set; }
        public virtual DbSet<SstClasses> SstClasses { get; set; }
        public virtual DbSet<SstClauses> SstClauses { get; set; }
        public virtual DbSet<SstClausesDetails> SstClausesDetails { get; set; }
        public virtual DbSet<SstClosingPeriods> SstClosingPeriods { get; set; }
        public virtual DbSet<SstCodes> SstCodes { get; set; }
        public virtual DbSet<SstComponents> SstComponents { get; set; }
        public virtual DbSet<SstConditions> SstConditions { get; set; }
        public virtual DbSet<SstContainers> SstContainers { get; set; }
        public virtual DbSet<SstCoverTypes> SstCoverTypes { get; set; }
        public virtual DbSet<SstCustomerTypes> SstCustomerTypes { get; set; }
        public virtual DbSet<SstDiscounts> SstDiscounts { get; set; }
        public virtual DbSet<SstDocumentGroups> SstDocumentGroups { get; set; }
        public virtual DbSet<SstDocuments> SstDocuments { get; set; }
        public virtual DbSet<SstDomainValues> SstDomainValues { get; set; }
        public virtual DbSet<SstDomains> SstDomains { get; set; }
        public virtual DbSet<SstEndorsements> SstEndorsements { get; set; }
        public virtual DbSet<SstEpaymentAlerts> SstEpaymentAlerts { get; set; }
        public virtual DbSet<SstEpaymentDetails> SstEpaymentDetails { get; set; }
        public virtual DbSet<SstEpaymentMethods> SstEpaymentMethods { get; set; }
        public virtual DbSet<SstEpaymentTransaction> SstEpaymentTransaction { get; set; }
        public virtual DbSet<SstFees> SstFees { get; set; }
        public virtual DbSet<SstFeesDetails> SstFeesDetails { get; set; }
        public virtual DbSet<SstFeesTiers> SstFeesTiers { get; set; }
        public virtual DbSet<SstFeesTiersDetails> SstFeesTiersDetails { get; set; }
        public virtual DbSet<SstFormControls> SstFormControls { get; set; }
        public virtual DbSet<SstFormElements> SstFormElements { get; set; }
        public virtual DbSet<SstFormGrid> SstFormGrid { get; set; }
        public virtual DbSet<SstFormSystems> SstFormSystems { get; set; }
        public virtual DbSet<SstForms> SstForms { get; set; }
        public virtual DbSet<SstIntegrations> SstIntegrations { get; set; }
        public virtual DbSet<SstIntegrationsApiMapping> SstIntegrationsApiMapping { get; set; }
        public virtual DbSet<SstIntegrationsApiObject> SstIntegrationsApiObject { get; set; }
        public virtual DbSet<SstIntegrationsDbMapping> SstIntegrationsDbMapping { get; set; }
        public virtual DbSet<SstIntegrationsObjectControls> SstIntegrationsObjectControls { get; set; }
        public virtual DbSet<SstIntegrationsSettings> SstIntegrationsSettings { get; set; }
        public virtual DbSet<SstLogs> SstLogs { get; set; }
        public virtual DbSet<SstLogsDetails> SstLogsDetails { get; set; }
        public virtual DbSet<SstMailer> SstMailer { get; set; }
        public virtual DbSet<SstMappings> SstMappings { get; set; }
        public virtual DbSet<SstModules> SstModules { get; set; }
        public virtual DbSet<SstNotifications> SstNotifications { get; set; }
        public virtual DbSet<SstNotificationsAttachments> SstNotificationsAttachments { get; set; }
        public virtual DbSet<SstNotificationsContacts> SstNotificationsContacts { get; set; }
        public virtual DbSet<SstNotificationsLogs> SstNotificationsLogs { get; set; }
        public virtual DbSet<SstNotificationsParameters> SstNotificationsParameters { get; set; }
        public virtual DbSet<SstNotificationsTemplates> SstNotificationsTemplates { get; set; }
        public virtual DbSet<SstPages> SstPages { get; set; }
        public virtual DbSet<SstPagesControls> SstPagesControls { get; set; }
        public virtual DbSet<SstPagesControlsParams> SstPagesControlsParams { get; set; }
        public virtual DbSet<SstPaymentCycles> SstPaymentCycles { get; set; }
        public virtual DbSet<SstPaymentDetails> SstPaymentDetails { get; set; }
        public virtual DbSet<SstPolicyDiscounts> SstPolicyDiscounts { get; set; }
        public virtual DbSet<SstPolicyTypes> SstPolicyTypes { get; set; }
        public virtual DbSet<SstProcessActions> SstProcessActions { get; set; }
        public virtual DbSet<SstProcessConditions> SstProcessConditions { get; set; }
        public virtual DbSet<SstProcessParentSteps> SstProcessParentSteps { get; set; }
        public virtual DbSet<SstProcessRoles> SstProcessRoles { get; set; }
        public virtual DbSet<SstProcessRules> SstProcessRules { get; set; }
        public virtual DbSet<SstProcessSteps> SstProcessSteps { get; set; }
        public virtual DbSet<SstProcessSystems> SstProcessSystems { get; set; }
        public virtual DbSet<SstProcesses> SstProcesses { get; set; }
        public virtual DbSet<SstQuestControls> SstQuestControls { get; set; }
        public virtual DbSet<SstQuestSystems> SstQuestSystems { get; set; }
        public virtual DbSet<SstQuestionnaires> SstQuestionnaires { get; set; }
        public virtual DbSet<SstResources> SstResources { get; set; }
        public virtual DbSet<SstRules> SstRules { get; set; }
        public virtual DbSet<SstShortPeriods> SstShortPeriods { get; set; }
        public virtual DbSet<SstShortPeriodsDetails> SstShortPeriodsDetails { get; set; }
        public virtual DbSet<SstSmsProviders> SstSmsProviders { get; set; }
        public virtual DbSet<SstSystems> SstSystems { get; set; }
        public virtual DbSet<SstUserAlerts> SstUserAlerts { get; set; }
        public virtual DbSet<SstUsers> SstUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=192.168.0.248;port=3306;user=root;password=root;database=ins_cloud");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<CpEpaymentTransactions>(entity =>
            {
                entity.ToTable("cp_epayment_transactions", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("ID_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AcquirerId)
                    .HasColumnName("ACQUIRER_ID")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(9,3)");

                entity.Property(e => e.AutoLogId)
                    .HasColumnName("AUTO_LOG_ID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ConfirmationId)
                    .HasColumnName("CONFIRMATION_ID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CUSTOMER_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CustomerType)
                    .HasColumnName("CUSTOMER_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LogId)
                    .HasColumnName("LOG_ID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Note)
                    .HasColumnName("NOTE")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.PaymentStore)
                    .HasColumnName("PAYMENT_STORE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.RequestDate).HasColumnName("REQUEST_DATE");

                entity.Property(e => e.ResponseDate).HasColumnName("RESPONSE_DATE");

                entity.Property(e => e.ResponseId)
                    .HasColumnName("RESPONSE_ID")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Source)
                    .HasColumnName("SOURCE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StatusMessage)
                    .HasColumnName("STATUS_MESSAGE")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Version)
                    .HasColumnName("VERSION")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CpUserProperties>(entity =>
            {
                entity.ToTable("cp_user_properties", "ins_cloud");

                entity.HasIndex(e => e.UserId)
                    .HasName("cp_user_properties_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Property)
                    .IsRequired()
                    .HasColumnName("PROPERTY")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.PropertyValue)
                    .IsRequired()
                    .HasColumnName("PROPERTY_VALUE")
                    .HasColumnType("longblob");

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.InverseUser)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("cp_user_properties_fk01");
            });

            modelBuilder.Entity<SpdComponents>(entity =>
            {
                entity.ToTable("spd_components", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("spd_components_idx03");

                entity.HasIndex(e => e.Id)
                    .HasName("spd_components_idx01");

                entity.HasIndex(e => e.RefComponentId)
                    .HasName("spd_components_fk02");

                entity.HasIndex(e => e.StepId)
                    .HasName("spd_components_fk01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("spd_components_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FormType)
                    .HasColumnName("form_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.LayoutType)
                    .HasColumnName("layout_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("order")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RefComponentId)
                    .HasColumnName("ref_component_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.StepId)
                    .HasColumnName("step_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SpdComponents)
                    .HasForeignKey(d => d.StepId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_components_fk01");
            });

            modelBuilder.Entity<SpdContainers>(entity =>
            {
                entity.ToTable("spd_containers", "ins_cloud");

                entity.HasIndex(e => e.ComponentId)
                    .HasName("spd_containers_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("spd_containers_idx01");

                entity.HasIndex(e => e.RefContainerId)
                    .HasName("spd_containers_idx03");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ComponentId)
                    .HasColumnName("component_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("key")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RefContainerId)
                    .HasColumnName("ref_container_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Component)
                    .WithMany(p => p.SpdContainers)
                    .HasForeignKey(d => d.ComponentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_containers_fk01");

                entity.HasOne(d => d.RefContainer)
                    .WithMany(p => p.InverseRefContainer)
                    .HasForeignKey(d => d.RefContainerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_containers_fk02");
            });

            modelBuilder.Entity<SpdControlValues>(entity =>
            {
                entity.ToTable("spd_control_values", "ins_cloud");

                entity.HasIndex(e => e.ComponentId)
                    .HasName("spd_control_values_fk02");

                entity.HasIndex(e => e.ControlId)
                    .HasName("spd_control_values_fk03");

                entity.HasIndex(e => e.ProductId)
                    .HasName("spd_control_values_fk05");

                entity.HasIndex(e => e.StepId)
                    .HasName("spd_control_values_fk01");

                entity.HasIndex(e => e.UserPropertyId)
                    .HasName("spd_control_values_fk04");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ComponentId)
                    .HasColumnName("COMPONENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ControlId)
                    .HasColumnName("CONTROL_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ControlKey)
                    .HasColumnName("CONTROL_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ControlValue)
                    .HasColumnName("CONTROL_VALUE")
                    .HasColumnType("longblob");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ProductId)
                    .HasColumnName("PRODUCT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.UserPropertyId)
                    .HasColumnName("USER_PROPERTY_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Component)
                    .WithMany(p => p.SpdControlValues)
                    .HasForeignKey(d => d.ComponentId)
                    .HasConstraintName("spd_control_values_fk02");

                entity.HasOne(d => d.Control)
                    .WithMany(p => p.SpdControlValues)
                    .HasForeignKey(d => d.ControlId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_control_values_fk03");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.SpdControlValues)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("spd_control_values_fk05");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SpdControlValues)
                    .HasForeignKey(d => d.StepId)
                    .HasConstraintName("spd_control_values_fk01");

                entity.HasOne(d => d.UserProperty)
                    .WithMany(p => p.SpdControlValues)
                    .HasForeignKey(d => d.UserPropertyId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_control_values_fk04");
            });

            modelBuilder.Entity<SpdFormControls>(entity =>
            {
                entity.ToTable("spd_form_controls", "ins_cloud");

                entity.HasIndex(e => e.ContainerId)
                    .HasName("spd_form_controls_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("spd_form_controls_idx01");

                entity.HasIndex(e => e.RefControlId)
                    .HasName("spd_form_controls_idx03");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ContainerId)
                    .HasColumnName("container_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Disabled)
                    .HasColumnName("disabled")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.HasSubformControls)
                    .HasColumnName("has_subform_controls")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("key")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Options)
                    .HasColumnName("options")
                    .HasColumnType("longtext");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RefControlId)
                    .HasColumnName("ref_control_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Required)
                    .HasColumnName("required")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Value)
                    .HasColumnName("value")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Width)
                    .HasColumnName("width")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Container)
                    .WithMany(p => p.SpdFormControls)
                    .HasForeignKey(d => d.ContainerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_form_controls_fk01");

                entity.HasOne(d => d.RefControl)
                    .WithMany(p => p.InverseRefControl)
                    .HasForeignKey(d => d.RefControlId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_form_controls_fk02");
            });

            modelBuilder.Entity<SpdProducts>(entity =>
            {
                entity.ToTable("spd_products", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SPD_PRODUCTS_IDX03");

                entity.HasIndex(e => e.Id)
                    .HasName("SPD_PRODUCTS_IDX01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SPD_PRODUCTS_IDX02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.LaunchDate)
                    .HasColumnName("launch_date")
                    .HasColumnType("date");

                entity.Property(e => e.Logo)
                    .HasColumnName("logo")
                    .HasColumnType("blob");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TerminationDate)
                    .HasColumnName("termination_date")
                    .HasColumnType("date");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SpdProducts)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("spd_products_fk01");
            });

            modelBuilder.Entity<SpdProductsDetails>(entity =>
            {
                entity.ToTable("spd_products_details", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("spd_products_details_idx01");

                entity.HasIndex(e => e.ProductId)
                    .HasName("spd_products_details_idx03");

                entity.HasIndex(e => e.SystemId)
                    .HasName("spd_products_details_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("class_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("policy_type")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RiskCategory)
                    .HasColumnName("risk_category")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ValidFrom)
                    .HasColumnName("valid_from")
                    .HasColumnType("date");

                entity.Property(e => e.ValidTo)
                    .HasColumnName("valid_to")
                    .HasColumnType("date");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.SpdProductsDetails)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("spd_products_details_fk01");
            });

            modelBuilder.Entity<SpdProductsSteps>(entity =>
            {
                entity.ToTable("spd_products_steps", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("spd_products_steps_idx01");

                entity.HasIndex(e => e.ProductId)
                    .HasName("spd_products_steps_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Load)
                    .HasColumnName("load")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("order")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Submit)
                    .HasColumnName("submit")
                    .HasMaxLength(1024)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SpdSequences>(entity =>
            {
                entity.ToTable("spd_sequences", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SpdSequencesDetails>(entity =>
            {
                entity.ToTable("spd_sequences_details", "ins_cloud");

                entity.HasIndex(e => e.IntegrationId)
                    .HasName("spd_sequences_details_fk02");

                entity.HasIndex(e => e.SequenceId)
                    .HasName("spd_sequences_details_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.IntegrationId)
                    .HasColumnName("INTEGRATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SequenceId)
                    .HasColumnName("SEQUENCE_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Integration)
                    .WithMany(p => p.SpdSequencesDetails)
                    .HasForeignKey(d => d.IntegrationId)
                    .HasConstraintName("spd_sequences_details_fk02");

                entity.HasOne(d => d.Sequence)
                    .WithMany(p => p.SpdSequencesDetails)
                    .HasForeignKey(d => d.SequenceId)
                    .HasConstraintName("spd_sequences_details_fk01");
            });

            modelBuilder.Entity<SpdStepsTransactions>(entity =>
            {
                entity.ToTable("spd_steps_transactions", "ins_cloud");

                entity.HasIndex(e => e.IntegrationId)
                    .HasName("spd_steps_transactions_fk02");

                entity.HasIndex(e => e.StepId)
                    .HasName("spd_steps_transactions_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.IntegrationId)
                    .HasColumnName("INTEGRATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TransactionType)
                    .HasColumnName("TRANSACTION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Integration)
                    .WithMany(p => p.SpdStepsTransactions)
                    .HasForeignKey(d => d.IntegrationId)
                    .HasConstraintName("spd_steps_transactions_fk02");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SpdStepsTransactions)
                    .HasForeignKey(d => d.StepId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("spd_steps_transactions_fk01");
            });

            modelBuilder.Entity<SstActions>(entity =>
            {
                entity.ToTable("sst_actions", "ins_cloud");

                entity.HasIndex(e => e.RuleId)
                    .HasName("SST_ACTIONS_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ActionType)
                    .HasColumnName("ACTION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.RuleId)
                    .HasColumnName("RULE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetAction)
                    .HasColumnName("TARGET_ACTION")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.TargetId)
                    .HasColumnName("TARGET_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetKey)
                    .HasColumnName("TARGET_KEY")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.TargetParent)
                    .HasColumnName("TARGET_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetType)
                    .HasColumnName("TARGET_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.HasOne(d => d.Rule)
                    .WithMany(p => p.SstActions)
                    .HasForeignKey(d => d.RuleId)
                    .HasConstraintName("SST_ACTIONS_FK01");
            });

            modelBuilder.Entity<SstAgentStructures>(entity =>
            {
                entity.ToTable("sst_agent_structures", "ins_cloud");

                entity.HasIndex(e => e.BusinessChannel)
                    .HasName("SST_AGENT_STRUCTURES_IDX04");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_AGENT_STRUCTURES_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_AGENT_STRUCTURES_IDX01");

                entity.HasIndex(e => e.ParentId)
                    .HasName("SST_AGENT_STRUCTURES_IDX03");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BusinessChannel)
                    .HasColumnName("BUSINESS_CHANNEL")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate)
                    .HasColumnName("CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParentId)
                    .HasColumnName("PARENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ValidFrom)
                    .HasColumnName("VALID_FROM")
                    .HasColumnType("date");

                entity.Property(e => e.ValidTo)
                    .HasColumnName("VALID_TO")
                    .HasColumnType("date");

                entity.HasOne(d => d.BusinessChannelNavigation)
                    .WithMany(p => p.SstAgentStructures)
                    .HasForeignKey(d => d.BusinessChannel)
                    .HasConstraintName("SST_AGENT_STRUCTURES_FK02");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("SST_AGENT_STRUCTURES_FK01");
            });

            modelBuilder.Entity<SstAlerts>(entity =>
            {
                entity.ToTable("sst_alerts", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_ALERTS_IDX01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_ALERTS_FK01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Color)
                    .HasColumnName("COLOR")
                    .HasMaxLength(58)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Date).HasColumnName("DATE");

                entity.Property(e => e.Icon)
                    .HasColumnName("ICON")
                    .HasMaxLength(58)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("IMAGE")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstAlerts)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_ALERTS_FK01");
            });

            modelBuilder.Entity<SstBusinessChannels>(entity =>
            {
                entity.ToTable("sst_business_channels", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_BUSINESS_CHANNELS_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_BUSINESS_CHANNELS_IDX01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_business_channels_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate)
                    .HasColumnName("CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstBusinessChannels)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_business_channels_fk01");
            });

            modelBuilder.Entity<SstChannelPlans>(entity =>
            {
                entity.ToTable("sst_channel_plans", "ins_cloud");

                entity.HasIndex(e => e.BusinessChannel)
                    .HasName("SST_CHANNEL_PLANS_FK01");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_CHANNEL_PLANS_IDX01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("SST_CHANNEL_PLANS_IDX02V1");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BusinessChannel)
                    .HasColumnName("BUSINESS_CHANNEL")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate)
                    .HasColumnName("CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.BusinessChannelNavigation)
                    .WithMany(p => p.SstChannelPlans)
                    .HasForeignKey(d => d.BusinessChannel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CHANNEL_PLANS_FK01");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstChannelPlans)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CHANNEL_PLANS_FK02");
            });

            modelBuilder.Entity<SstChannelTypes>(entity =>
            {
                entity.ToTable("sst_channel_types", "ins_cloud");

                entity.HasIndex(e => e.BusinessChannel)
                    .HasName("SST_CHANNEL_TYPES_FK01");

                entity.HasIndex(e => e.CustomerType)
                    .HasName("SST_CHANNEL_TYPES_FK02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_CHANNEL_TYPES_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BusinessChannel)
                    .HasColumnName("BUSINESS_CHANNEL")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate)
                    .HasColumnName("CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerType)
                    .HasColumnName("CUSTOMER_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.HasOne(d => d.BusinessChannelNavigation)
                    .WithMany(p => p.SstChannelTypes)
                    .HasForeignKey(d => d.BusinessChannel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CHANNEL_TYPES_FK01");

                entity.HasOne(d => d.CustomerTypeNavigation)
                    .WithMany(p => p.SstChannelTypes)
                    .HasForeignKey(d => d.CustomerType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CHANNEL_TYPES_FK02");
            });

            modelBuilder.Entity<SstClaimDiscounts>(entity =>
            {
                entity.ToTable("sst_claim_discounts", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_claim_discounts_fk02");

                entity.HasIndex(e => e.DiscountId)
                    .HasName("sst_claim_discounts_fk01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_claim_discounts_fk03");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AfterClaimPercent)
                    .HasColumnName("AFTER_CLAIM_PERCENT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.ClaimYearsFrom)
                    .HasColumnName("CLAIM_YEARS_FROM")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ClaimYearsTo)
                    .HasColumnName("CLAIM_YEARS_TO")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountId)
                    .HasColumnName("DISCOUNT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Percent)
                    .HasColumnName("PERCENT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstClaimDiscounts)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_claim_discounts_fk02");

                entity.HasOne(d => d.Discount)
                    .WithMany(p => p.SstClaimDiscounts)
                    .HasForeignKey(d => d.DiscountId)
                    .HasConstraintName("sst_claim_discounts_fk01");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstClaimDiscounts)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_claim_discounts_fk03");
            });

            modelBuilder.Entity<SstClasses>(entity =>
            {
                entity.ToTable("sst_classes", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_classes_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BusinessType)
                    .HasColumnName("business_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstClasses)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_classes_fk01");
            });

            modelBuilder.Entity<SstClauses>(entity =>
            {
                entity.ToTable("sst_clauses", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("SST_CLAUSES_IDX02");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_CLAUSES_IDX05");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_CLAUSES_IDX01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("SST_CLAUSES_IDX03");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_CLAUSES_IDX04");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Code)
                    .HasColumnName("CODE")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.MarineClause)
                    .HasColumnName("MARINE_CLAUSE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstClauses)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CLAUSES_FK01");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstClauses)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CLAUSES_FK02");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstClauses)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CLAUSES_FK03");
            });

            modelBuilder.Entity<SstClausesDetails>(entity =>
            {
                entity.ToTable("sst_clauses_details", "ins_cloud");

                entity.HasIndex(e => e.ClauseId)
                    .HasName("SST_CLAUSES_DETAILS_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_CLAUSES_DETAILS_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClauseId)
                    .HasColumnName("CLAUSE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClauseType)
                    .HasColumnName("CLAUSE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CoverType)
                    .HasColumnName("COVER_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("DESCRIPTION")
                    .HasColumnType("longtext");

                entity.Property(e => e.Description2)
                    .HasColumnName("DESCRIPTION2")
                    .HasColumnType("longtext");

                entity.Property(e => e.DiscountType)
                    .HasColumnName("DISCOUNT_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.EffectiveDate).HasColumnName("EFFECTIVE_DATE");

                entity.Property(e => e.ExpiryDate).HasColumnName("EXPIRY_DATE");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Clause)
                    .WithMany(p => p.SstClausesDetails)
                    .HasForeignKey(d => d.ClauseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_CLAUSES_DETAILS_FK01");
            });

            modelBuilder.Entity<SstClosingPeriods>(entity =>
            {
                entity.ToTable("sst_closing_periods", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_closing_periods_idx02");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("sst_closing_periods_idx01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_closing_periods_idx03");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_closing_periods_idx04");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BranchId)
                    .HasColumnName("BRANCH_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClosingDate).HasColumnName("CLOSING_DATE");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .HasColumnName("MODULE_CODE")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstClosingPeriods)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_closing_periods_fk02");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstClosingPeriods)
                    .HasForeignKey(d => d.PolicyType)
                    .HasConstraintName("sst_closing_periods_fk03");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstClosingPeriods)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_closing_fk01");
            });

            modelBuilder.Entity<SstCodes>(entity =>
            {
                entity.ToTable("sst_codes", "ins_cloud");

                entity.HasIndex(e => e.CodeId)
                    .HasName("sst_codes_fk01");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_codes_idx01");

                entity.HasIndex(e => e.ModuleCode)
                    .HasName("sst_codes_fk02");

                entity.HasIndex(e => new { e.SystemId, e.ModuleCode })
                    .HasName("sst_codes_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CodeId)
                    .HasColumnName("code_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DomainId)
                    .HasColumnName("domain_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.MajorCode)
                    .HasColumnName("major_code")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.MinorCode)
                    .HasColumnName("minor_code")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .IsRequired()
                    .HasColumnName("module_code")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Code)
                    .WithMany(p => p.InverseCode)
                    .HasForeignKey(d => d.CodeId)
                    .HasConstraintName("sst_codes_fk01");

                entity.HasOne(d => d.ModuleCodeNavigation)
                    .WithMany(p => p.SstCodes)
                    .HasForeignKey(d => d.ModuleCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_codes_fk02");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstCodes)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_codes_fk03");
            });

            modelBuilder.Entity<SstComponents>(entity =>
            {
                entity.ToTable("sst_components", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("sst_components_idx03");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_components_idx01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_components_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FormType)
                    .HasColumnName("form_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Global)
                    .HasColumnName("global")
                    .HasColumnType("tinyint(2)");

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.LayoutType)
                    .HasColumnName("layout_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<SstConditions>(entity =>
            {
                entity.ToTable("sst_conditions", "ins_cloud");

                entity.HasIndex(e => e.RuleId)
                    .HasName("SST_CONDITIONS_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ConditionType)
                    .HasColumnName("CONDITION_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Formula)
                    .HasColumnName("FORMULA")
                    .HasColumnType("longtext");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Operator)
                    .HasColumnName("OPERATOR")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.ReferenceId)
                    .HasColumnName("REFERENCE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReferenceKey)
                    .HasColumnName("REFERENCE_KEY")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ReferenceParent)
                    .HasColumnName("REFERENCE_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReferenceType)
                    .HasColumnName("REFERENCE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RuleId)
                    .HasColumnName("RULE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Validator)
                    .HasColumnName("VALIDATOR")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ValidatorValue)
                    .HasColumnName("VALIDATOR_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ValidatorValue2)
                    .HasColumnName("VALIDATOR_VALUE2")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.HasOne(d => d.Rule)
                    .WithMany(p => p.SstConditions)
                    .HasForeignKey(d => d.RuleId)
                    .HasConstraintName("SST_CONDITIONS_FK01");
            });

            modelBuilder.Entity<SstContainers>(entity =>
            {
                entity.ToTable("sst_containers", "ins_cloud");

                entity.HasIndex(e => e.ComponentId)
                    .HasName("sst_containers_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_containers_idx01");

                entity.HasIndex(e => e.RefContainerId)
                    .HasName("sst_containers_idx03");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ComponentId)
                    .HasColumnName("component_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("key")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RefContainerId)
                    .HasColumnName("ref_container_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Component)
                    .WithMany(p => p.SstContainers)
                    .HasForeignKey(d => d.ComponentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_containers_fk01");
            });

            modelBuilder.Entity<SstCoverTypes>(entity =>
            {
                entity.ToTable("sst_cover_types", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_cover_types_fk02");

                entity.HasIndex(e => e.CoverId)
                    .HasName("sst_cover_types_fk04");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_cover_types_fk03");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_cover_types_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CoverId)
                    .HasColumnName("COVER_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstCoverTypes)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_cover_types_fk02");

                entity.HasOne(d => d.Cover)
                    .WithMany(p => p.InverseCover)
                    .HasForeignKey(d => d.CoverId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_cover_types_fk04");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstCoverTypes)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_cover_types_fk03");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstCoverTypes)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_cover_types_fk01");
            });

            modelBuilder.Entity<SstCustomerTypes>(entity =>
            {
                entity.ToTable("sst_customer_types", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_CUSTOMER_TYPES_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_CUSTOMER_TYPES_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate)
                    .HasColumnName("CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate)
                    .HasColumnName("MODIFICATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstDiscounts>(entity =>
            {
                entity.ToTable("sst_discounts", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_discounts_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ApplyClaim)
                    .HasColumnName("APPLY_CLAIM")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.ApplyCover)
                    .HasColumnName("APPLY_COVER")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.ApplyRenewal)
                    .HasColumnName("APPLY_RENEWAL")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.ApplyRisk)
                    .HasColumnName("APPLY_RISK")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.BranchId)
                    .HasColumnName("BRANCH_ID")
                    .HasColumnType("bigint(5)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(2)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstDiscounts)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_discounts_fk01");
            });

            modelBuilder.Entity<SstDocumentGroups>(entity =>
            {
                entity.ToTable("sst_document_groups", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_document_groups_idx01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_document_groups_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstDocumentGroups)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_document_groups_fk01");
            });

            modelBuilder.Entity<SstDocuments>(entity =>
            {
                entity.ToTable("sst_documents", "ins_cloud");

                entity.HasIndex(e => e.GroupId)
                    .HasName("sst_documents_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_documents_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.GroupId)
                    .HasColumnName("GROUP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.IsRequired)
                    .HasColumnName("IS_REQUIRED")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.HasOne(d => d.Group)
                    .WithMany(p => p.SstDocuments)
                    .HasForeignKey(d => d.GroupId)
                    .HasConstraintName("sst_documents_fk01");
            });

            modelBuilder.Entity<SstDomainValues>(entity =>
            {
                entity.ToTable("sst_domain_values", "ins_cloud");

                entity.HasIndex(e => e.DomainId)
                    .HasName("sst_domain_values_fk01");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_domain_values_idx01");

                entity.HasIndex(e => new { e.DomainCode, e.Value, e.SystemId, e.CompanyId })
                    .HasName("sst_domain_values_idx02");

                entity.HasIndex(e => new { e.Value, e.DomainCode, e.SystemId, e.CompanyId })
                    .HasName("sst_domain_values_un01")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)")
                    .ValueGeneratedNever();

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DomainCode)
                    .HasColumnName("DOMAIN_CODE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.DomainId)
                    .HasColumnName("DOMAIN_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.ShortName)
                    .HasColumnName("Short_Name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("VALUE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.DomainCodeNavigation)
                    .WithMany(p => p.SstDomainValues)
                    .HasForeignKey(d => d.DomainCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_domain_values_fk01");
            });

            modelBuilder.Entity<SstDomains>(entity =>
            {
                entity.ToTable("sst_domains", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_domains_idx01");

                entity.HasIndex(e => new { e.Code, e.SystemId, e.CompanyId })
                    .HasName("sst_domains_un01")
                    .IsUnique();

                entity.HasIndex(e => new { e.SystemId, e.Code, e.CompanyId })
                    .HasName("sst_domains_idx02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)")
                    .ValueGeneratedNever();

                entity.Property(e => e.Code)
                    .HasColumnName("CODE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DefaultValue)
                    .HasColumnName("DEFAULT_VALUE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .HasColumnName("MODULE_CODE")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstDomains)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_domains_fk01");
            });

            modelBuilder.Entity<SstEndorsements>(entity =>
            {
                entity.ToTable("sst_endorsements", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_endorsements_fk02");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_endorsements_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(2)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstEndorsements)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_endorsements_fk02");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstEndorsements)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_endorsements_fk01");
            });

            modelBuilder.Entity<SstEpaymentAlerts>(entity =>
            {
                entity.ToTable("sst_epayment_alerts", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_EPAYMENT_ALERTS_IDX01");

                entity.HasIndex(e => e.PaymentId)
                    .HasName("SST_EPAYMENT_ALERTS_FK01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CardExpiry)
                    .HasColumnName("CARD_EXPIRY")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CardPreExpiry)
                    .HasColumnName("CARD_PRE_EXPIRY")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentExpiry)
                    .HasColumnName("PAYMENT_EXPIRY")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.PaymentFailure)
                    .HasColumnName("PAYMENT_FAILURE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.PaymentId)
                    .HasColumnName("PAYMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PaymentRecurring)
                    .HasColumnName("PAYMENT_RECURRING")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.PaymentRenewal)
                    .HasColumnName("PAYMENT_RENEWAL")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.PaymentSuccess)
                    .HasColumnName("PAYMENT_SUCCESS")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.SstEpaymentAlerts)
                    .HasForeignKey(d => d.PaymentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_EPAYMENT_ALERTS_FK01");
            });

            modelBuilder.Entity<SstEpaymentDetails>(entity =>
            {
                entity.ToTable("sst_epayment_details", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_EPAYMENT_DETAILS_IDX01");

                entity.HasIndex(e => e.PaymentId)
                    .HasName("SST_EPAYMENT_DETAILS_FK01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AccessCode)
                    .HasColumnName("ACCESS_CODE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .HasColumnName("ADDRESS")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.ApiId)
                    .HasColumnName("API_ID")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.AuthenticationType)
                    .HasColumnName("AUTHENTICATION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CertificatePass)
                    .HasColumnName("CERTIFICATE_PASS")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CertificatePath)
                    .HasColumnName("CERTIFICATE_PATH")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Channel)
                    .HasColumnName("CHANNEL")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Command)
                    .HasColumnName("COMMAND")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(24)
                    .IsUnicode(false);

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerEmail)
                    .HasColumnName("CUSTOMER_EMAIL")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IsSecure)
                    .HasColumnName("IS_SECURE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Language)
                    .HasColumnName("LANGUAGE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.MerchantId)
                    .HasColumnName("MERCHANT_ID")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.MerchantReference)
                    .HasColumnName("MERCHANT_REFERENCE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.OrderDescription)
                    .HasColumnName("ORDER_DESCRIPTION")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.OrderInfo)
                    .HasColumnName("ORDER_INFO")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentId)
                    .HasColumnName("PAYMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PaymentOption)
                    .HasColumnName("PAYMENT_OPTION")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Port)
                    .HasColumnName("PORT")
                    .HasColumnType("mediumint(5)");

                entity.Property(e => e.Registration)
                    .HasColumnName("REGISTRATION")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ReturnPath)
                    .HasColumnName("RETURN_PATH")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Store)
                    .HasColumnName("STORE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Terminal)
                    .HasColumnName("TERMINAL")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Timeout)
                    .HasColumnName("TIMEOUT")
                    .HasColumnType("bigint(10)");

                entity.Property(e => e.TransactionId)
                    .HasColumnName("TRANSACTION_ID")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionPassword)
                    .HasColumnName("TRANSACTION_PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.SstEpaymentDetails)
                    .HasForeignKey(d => d.PaymentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_EPAYMENT_DETAILS_FK01");
            });

            modelBuilder.Entity<SstEpaymentMethods>(entity =>
            {
                entity.ToTable("sst_epayment_methods", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_EPAYMENT_METHODS_IDX01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_EPAYMENT_METHODS_FK01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstEpaymentMethods)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_EPAYMENT_METHODS_FK01");
            });

            modelBuilder.Entity<SstEpaymentTransaction>(entity =>
            {
                entity.ToTable("sst_epayment_transaction", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.AcquirerId)
                    .HasColumnName("ACQUIRER_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(9,3)");

                entity.Property(e => e.AutoNotifyLogId)
                    .HasColumnName("AUTO_NOTIFY_LOG_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ConfirmationId)
                    .HasColumnName("CONFIRMATION_ID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CUSTOMER_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LanguageId)
                    .HasColumnName("LANGUAGE_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Note)
                    .HasColumnName("NOTE")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.PaymentStore)
                    .HasColumnName("PAYMENT_STORE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.PortalId)
                    .HasColumnName("PORTAL_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.RequestDate)
                    .HasColumnName("REQUEST_DATE")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ResponseDate)
                    .HasColumnName("RESPONSE_DATE")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ReturnedTransactionId)
                    .HasColumnName("RETURNED_TRANSACTION_ID")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.SourceOfTheTransaction)
                    .HasColumnName("SOURCE_OF_THE_TRANSACTION")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TransactionLogId)
                    .HasColumnName("TRANSACTION_LOG_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionStatus)
                    .HasColumnName("TRANSACTION_STATUS")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionStatusMessage)
                    .HasColumnName("TRANSACTION_STATUS_MESSAGE")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Version)
                    .HasColumnName("VERSION")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstFees>(entity =>
            {
                entity.ToTable("sst_fees", "ins_cloud");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_FEES_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_FEES_IDX01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_FEES_IDX03");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Abbreviation)
                    .HasColumnName("ABBREVIATION")
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.ApplyClaims)
                    .HasColumnName("APPLY_CLAIMS")
                    .HasColumnType("tinyint(4) unsigned zerofill");

                entity.Property(e => e.ApplyInvestment)
                    .HasColumnName("APPLY_INVESTMENT")
                    .HasColumnType("tinyint(4) unsigned zerofill");

                entity.Property(e => e.ApplyOn)
                    .HasColumnName("APPLY_ON")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ApplyProduction)
                    .HasColumnName("APPLY_PRODUCTION")
                    .HasColumnType("tinyint(4) unsigned zerofill");

                entity.Property(e => e.ApplyReinsurance)
                    .HasColumnName("APPLY_REINSURANCE")
                    .HasColumnType("tinyint(4) unsigned zerofill");

                entity.Property(e => e.CalculateFrom)
                    .HasColumnName("CALCULATE_FROM")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CalculationLevel)
                    .HasColumnName("CALCULATION_LEVEL")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Category)
                    .HasColumnName("CATEGORY")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CommissionType)
                    .HasColumnName("COMMISSION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DateType)
                    .HasColumnName("DATE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.DocumentType)
                    .HasColumnName("DOCUMENT_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.EffectiveDate).HasColumnName("EFFECTIVE_DATE");

                entity.Property(e => e.ExpiryDate).HasColumnName("EXPIRY_DATE");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.VoucherSide)
                    .HasColumnName("VOUCHER_SIDE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstFees)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("SST_FEES_FK01");
            });

            modelBuilder.Entity<SstFeesDetails>(entity =>
            {
                entity.ToTable("sst_fees_details", "ins_cloud");

                entity.HasIndex(e => e.FeeId)
                    .HasName("sst_fees_details_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClaimTransaction)
                    .HasColumnName("CLAIM_TRANSACTION")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.EndorsementId)
                    .HasColumnName("ENDORSEMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.FeeId)
                    .HasColumnName("FEE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.InvestmentTransaction)
                    .HasColumnName("INVESTMENT_TRANSACTION")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ReinsuranceTransaction)
                    .HasColumnName("REINSURANCE_TRANSACTION")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Fee)
                    .WithMany(p => p.SstFeesDetails)
                    .HasForeignKey(d => d.FeeId)
                    .HasConstraintName("sst_fees_DETAILS_FK01");
            });

            modelBuilder.Entity<SstFeesTiers>(entity =>
            {
                entity.ToTable("sst_fees_tiers", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_fees_tiers_fk03");

                entity.HasIndex(e => e.FeeId)
                    .HasName("SST_FEES_TIERS_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_FEES_TIERS_IDX01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_fees_tiers_fk04");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_fees_tiers_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AmountFrom)
                    .HasColumnName("AMOUNT_FROM")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.AmountTo)
                    .HasColumnName("AMOUNT_TO")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.AutoAdd)
                    .HasColumnName("AUTO_ADD")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.CalculationMethod)
                    .HasColumnName("CALCULATION_METHOD")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(24)
                    .IsUnicode(false);

                entity.Property(e => e.FeeAmount)
                    .HasColumnName("FEE_AMOUNT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.FeeId)
                    .HasColumnName("FEE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.FeePercent)
                    .HasColumnName("FEE_PERCENT")
                    .HasColumnType("decimal(10,5)");

                entity.Property(e => e.Location)
                    .HasColumnName("LOCATION")
                    .HasColumnType("int(11)");

                entity.Property(e => e.MaxAmount)
                    .HasColumnName("MAX_AMOUNT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.MinAmount)
                    .HasColumnName("MIN_AMOUNT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.MultipleOf)
                    .HasColumnName("MULTIPLE_OF")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RoundTo)
                    .HasColumnName("ROUND_TO")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TaxCode)
                    .HasColumnName("TAX_CODE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.TermFrom)
                    .HasColumnName("TERM_FROM")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.TermTo)
                    .HasColumnName("TERM_TO")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.TierType)
                    .HasColumnName("TIER_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.VoucherSide)
                    .HasColumnName("VOUCHER_SIDE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.YearFrom)
                    .HasColumnName("YEAR_FROM")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.YearTo)
                    .HasColumnName("YEAR_TO")
                    .HasColumnType("smallint(6)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstFeesTiers)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_fees_tiers_fk03");

                entity.HasOne(d => d.Fee)
                    .WithMany(p => p.SstFeesTiers)
                    .HasForeignKey(d => d.FeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_FEES_TIERS_FK01");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstFeesTiers)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_fees_tiers_fk04");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstFeesTiers)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_fees_tiers_fk02");
            });

            modelBuilder.Entity<SstFeesTiersDetails>(entity =>
            {
                entity.ToTable("sst_fees_tiers_details", "ins_cloud");

                entity.HasIndex(e => e.CoverId)
                    .HasName("sst_fees_tiers_details_fk02");

                entity.HasIndex(e => e.FeeTierId)
                    .HasName("SST_FEES_TYPES_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_FEES_TYPES_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Branch)
                    .HasColumnName("BRANCH")
                    .HasColumnType("bigint(15)");

                entity.Property(e => e.BusinessType)
                    .HasColumnName("BUSINESS_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CoverId)
                    .HasColumnName("COVER_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FeeTierId)
                    .HasColumnName("FEE_TIER_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Inclusion)
                    .HasColumnName("INCLUSION")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Tpa)
                    .HasColumnName("TPA")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Cover)
                    .WithMany(p => p.SstFeesTiersDetails)
                    .HasForeignKey(d => d.CoverId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_fees_tiers_details_fk02");

                entity.HasOne(d => d.FeeTier)
                    .WithMany(p => p.SstFeesTiersDetails)
                    .HasForeignKey(d => d.FeeTierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_fees_tiers_details_fk01");
            });

            modelBuilder.Entity<SstFormControls>(entity =>
            {
                entity.ToTable("sst_form_controls", "ins_cloud");

                entity.HasIndex(e => e.ContainerId)
                    .HasName("sst_fields_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_fields_idx01");

                entity.HasIndex(e => e.RefControlId)
                    .HasName("sst_fields_idx03");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ContainerId)
                    .HasColumnName("container_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Disabled)
                    .HasColumnName("disabled")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.HasSubformControls)
                    .HasColumnName("has_subform_controls")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("key")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Options)
                    .HasColumnName("options")
                    .HasColumnType("longtext");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RefControlId)
                    .HasColumnName("ref_control_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Required)
                    .HasColumnName("required")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Value)
                    .HasColumnName("value")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Width)
                    .HasColumnName("width")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Container)
                    .WithMany(p => p.SstFormControls)
                    .HasForeignKey(d => d.ContainerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_fields_fk01");

                entity.HasOne(d => d.RefControl)
                    .WithMany(p => p.InverseRefControl)
                    .HasForeignKey(d => d.RefControlId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_fields_fk02");
            });

            modelBuilder.Entity<SstFormElements>(entity =>
            {
                entity.ToTable("sst_form_elements", "ins_cloud");

                entity.HasIndex(e => e.FormId)
                    .HasName("sst_form_elements_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ElementControlname)
                    .IsRequired()
                    .HasColumnName("ELEMENT_CONTROLNAME")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ElementIsdisable)
                    .HasColumnName("ELEMENT_ISDISABLE")
                    .HasColumnType("tinyint(2)");

                entity.Property(e => e.ElementIsrequeired)
                    .HasColumnName("ELEMENT_ISREQUEIRED")
                    .HasColumnType("tinyint(2)");

                entity.Property(e => e.ElementLabel)
                    .IsRequired()
                    .HasColumnName("ELEMENT_LABEL")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ElementOption)
                    .HasColumnName("ELEMENT_OPTION")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ElementOrder)
                    .HasColumnName("ELEMENT_ORDER")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ElementSource)
                    .HasColumnName("ELEMENT_SOURCE")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ElementType)
                    .IsRequired()
                    .HasColumnName("ELEMENT_TYPE")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.FormId)
                    .HasColumnName("FORM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Language)
                    .HasColumnName("LANGUAGE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.HasOne(d => d.Form)
                    .WithMany(p => p.SstFormElements)
                    .HasForeignKey(d => d.FormId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_form_elements_fk01");
            });

            modelBuilder.Entity<SstFormGrid>(entity =>
            {
                entity.ToTable("sst_form_grid", "ins_cloud");

                entity.HasIndex(e => e.FormId)
                    .HasName("sst_form_grid_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FieldOrder)
                    .HasColumnName("FIELD_ORDER")
                    .HasColumnType("int(11)");

                entity.Property(e => e.FormId)
                    .HasColumnName("FORM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.GridField)
                    .IsRequired()
                    .HasColumnName("GRID_FIELD")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GridHeader)
                    .IsRequired()
                    .HasColumnName("GRID_HEADER")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .HasColumnName("LANGUAGE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.HasOne(d => d.Form)
                    .WithMany(p => p.SstFormGrid)
                    .HasForeignKey(d => d.FormId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_form_grid_fk01");
            });

            modelBuilder.Entity<SstFormSystems>(entity =>
            {
                entity.ToTable("sst_form_systems", "ins_cloud");

                entity.HasIndex(e => e.FormId)
                    .HasName("sst_form_systems_fk02");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_form_systems_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FormId)
                    .HasColumnName("FORM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Form)
                    .WithMany(p => p.SstFormSystems)
                    .HasForeignKey(d => d.FormId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_form_systems_fk02");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstFormSystems)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_form_systems_fk01");
            });

            modelBuilder.Entity<SstForms>(entity =>
            {
                entity.ToTable("sst_forms", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FormActionLabel)
                    .HasColumnName("FORM_ACTION_LABEL")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FormActionType)
                    .IsRequired()
                    .HasColumnName("FORM_ACTION_TYPE")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FormGroupName)
                    .HasColumnName("FORM_GROUP_NAME")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FormHeader)
                    .IsRequired()
                    .HasColumnName("FORM_HEADER")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FromOrder)
                    .HasColumnName("FROM_ORDER")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Language)
                    .HasColumnName("LANGUAGE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PageId)
                    .HasColumnName("PAGE_ID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<SstIntegrations>(entity =>
            {
                entity.ToTable("sst_integrations", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_integrations_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SourceType)
                    .HasColumnName("SOURCE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstIntegrations)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_fk01");
            });

            modelBuilder.Entity<SstIntegrationsApiMapping>(entity =>
            {
                entity.ToTable("sst_integrations_api_mapping", "ins_cloud");

                entity.HasIndex(e => e.SettingId)
                    .HasName("sst_integrations_api_mapping_fk01");

                entity.HasIndex(e => e.StepId)
                    .HasName("sst_integrations_api_mapping_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DefaultValue)
                    .HasColumnName("DEFAULT_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ElementId)
                    .HasColumnName("ELEMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementKey)
                    .HasColumnName("ELEMENT_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ElementParent)
                    .HasColumnName("ELEMENT_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementType)
                    .HasColumnName("ELEMENT_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.MappingType)
                    .HasColumnName("MAPPING_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("int(5)");

                entity.Property(e => e.ParamName)
                    .HasColumnName("PARAM_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParamType)
                    .HasColumnName("PARAM_TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SettingId)
                    .HasColumnName("SETTING_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TransactionType)
                    .HasColumnName("TRANSACTION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Setting)
                    .WithMany(p => p.SstIntegrationsApiMapping)
                    .HasForeignKey(d => d.SettingId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_api_mapping_fk01");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SstIntegrationsApiMapping)
                    .HasForeignKey(d => d.StepId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_api_mapping_fk02");
            });

            modelBuilder.Entity<SstIntegrationsApiObject>(entity =>
            {
                entity.ToTable("sst_integrations_api_object", "ins_cloud");

                entity.HasIndex(e => e.MappingId)
                    .HasName("sst_integrations_api_object_fk01");

                entity.HasIndex(e => e.StepId)
                    .HasName("sst_integrations_api_object_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DefaultValue)
                    .HasColumnName("DEFAULT_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ElementId)
                    .HasColumnName("ELEMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementKey)
                    .HasColumnName("ELEMENT_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ElementParent)
                    .HasColumnName("ELEMENT_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementType)
                    .HasColumnName("ELEMENT_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.MappingId)
                    .HasColumnName("MAPPING_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("int(5)");

                entity.Property(e => e.ParamName)
                    .HasColumnName("PARAM_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParamType)
                    .HasColumnName("PARAM_TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Mapping)
                    .WithMany(p => p.SstIntegrationsApiObject)
                    .HasForeignKey(d => d.MappingId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_api_object_fk01");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SstIntegrationsApiObject)
                    .HasForeignKey(d => d.StepId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_api_object_fk02");
            });

            modelBuilder.Entity<SstIntegrationsDbMapping>(entity =>
            {
                entity.ToTable("sst_integrations_db_mapping", "ins_cloud");

                entity.HasIndex(e => e.SettingId)
                    .HasName("sst_integrations_db_mapping_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ColumnName)
                    .HasColumnName("COLUMN_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ColumnType)
                    .HasColumnName("COLUMN_TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DefaultValue)
                    .HasColumnName("DEFAULT_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ElemenetParent)
                    .HasColumnName("ELEMENET_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementId)
                    .HasColumnName("ELEMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementKey)
                    .HasColumnName("ELEMENT_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ElementType)
                    .HasColumnName("ELEMENT_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.SettingId)
                    .HasColumnName("SETTING_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TableName)
                    .HasColumnName("TABLE_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Setting)
                    .WithMany(p => p.SstIntegrationsDbMapping)
                    .HasForeignKey(d => d.SettingId)
                    .HasConstraintName("sst_integrations_db_mapping_fk01");
            });

            modelBuilder.Entity<SstIntegrationsObjectControls>(entity =>
            {
                entity.ToTable("sst_integrations_object_controls", "ins_cloud");

                entity.HasIndex(e => e.ObjectId)
                    .HasName("sst_integrations_object_controls_fk01");

                entity.HasIndex(e => e.StepId)
                    .HasName("sst_integrations_object_controls_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DefaultValue)
                    .HasColumnName("DEFAULT_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ElementId)
                    .HasColumnName("ELEMENT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementKey)
                    .HasColumnName("ELEMENT_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ElementParent)
                    .HasColumnName("ELEMENT_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ElementType)
                    .HasColumnName("ELEMENT_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ObjectId)
                    .HasColumnName("OBJECT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("int(5)");

                entity.Property(e => e.ParamName)
                    .HasColumnName("PARAM_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParamType)
                    .HasColumnName("PARAM_TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Object)
                    .WithMany(p => p.SstIntegrationsObjectControls)
                    .HasForeignKey(d => d.ObjectId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_object_controls_fk01");

                entity.HasOne(d => d.Step)
                    .WithMany(p => p.SstIntegrationsObjectControls)
                    .HasForeignKey(d => d.StepId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_object_controls_fk02");
            });

            modelBuilder.Entity<SstIntegrationsSettings>(entity =>
            {
                entity.ToTable("sst_integrations_settings", "ins_cloud");

                entity.HasIndex(e => e.IntegrationId)
                    .HasName("sst_integrations_settings_fk01");

                entity.HasIndex(e => e.ProductId)
                    .HasName("sst_integrations_settings_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ApiName)
                    .HasColumnName("API_NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ApiSourceType)
                    .HasColumnName("API_SOURCE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ApiType)
                    .HasColumnName("API_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ApiUrl)
                    .HasColumnName("API_URL")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.AuthType)
                    .HasColumnName("AUTH_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DbHost)
                    .HasColumnName("DB_HOST")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbPassword)
                    .HasColumnName("DB_PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbPort)
                    .HasColumnName("DB_PORT")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DbSchema)
                    .HasColumnName("DB_SCHEMA")
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.DbService)
                    .HasColumnName("DB_SERVICE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbType)
                    .HasColumnName("DB_TYPE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DbUser)
                    .HasColumnName("DB_USER")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.HttpType)
                    .HasColumnName("HTTP_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.IntegrationId)
                    .HasColumnName("INTEGRATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .HasColumnName("MODULE_CODE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProductId)
                    .HasColumnName("PRODUCT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ServiceMethod)
                    .HasColumnName("SERVICE_METHOD")
                    .HasMaxLength(4000)
                    .IsUnicode(false);

                entity.Property(e => e.UrlType)
                    .HasColumnName("URL_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.XmlStructure)
                    .HasColumnName("XML_STRUCTURE")
                    .HasColumnType("longblob");

                entity.HasOne(d => d.Integration)
                    .WithMany(p => p.SstIntegrationsSettings)
                    .HasForeignKey(d => d.IntegrationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_settings_fk01");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.SstIntegrationsSettings)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_integrations_settings_fk02");
            });

            modelBuilder.Entity<SstLogs>(entity =>
            {
                entity.ToTable("sst_logs", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Date).HasColumnName("DATE");

                entity.Property(e => e.IoType)
                    .HasColumnName("IO_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(2048)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.StatusCode)
                    .HasColumnName("STATUS_CODE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionType)
                    .HasColumnName("TRANSACTION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Url)
                    .HasColumnName("URL")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstLogsDetails>(entity =>
            {
                entity.ToTable("sst_logs_details", "ins_cloud");

                entity.HasIndex(e => e.LogId)
                    .HasName("sst_logs_details_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Content)
                    .HasColumnName("CONTENT")
                    .HasColumnType("longtext");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.LogId)
                    .HasColumnName("LOG_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ProcessDate).HasColumnName("PROCESS_DATE");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.SstLogsDetails)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("sst_logs_details_fk01");
            });

            modelBuilder.Entity<SstMailer>(entity =>
            {
                entity.ToTable("sst_mailer", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_mailer_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Host)
                    .HasColumnName("HOST")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Port)
                    .HasColumnName("PORT")
                    .HasColumnType("mediumint(8)");

                entity.Property(e => e.Security)
                    .HasColumnName("SECURITY")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstMailer)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_mailer_fk01");
            });

            modelBuilder.Entity<SstMappings>(entity =>
            {
                entity.ToTable("sst_mappings", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ApiType)
                    .HasColumnName("API_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ApiUrl)
                    .HasColumnName("API_URL")
                    .HasColumnType("blob");

                entity.Property(e => e.AuthType)
                    .HasColumnName("AUTH_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DbHost)
                    .HasColumnName("DB_HOST")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbPassword)
                    .HasColumnName("DB_PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbPort)
                    .HasColumnName("DB_PORT")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.DbService)
                    .HasColumnName("DB_SERVICE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DbType)
                    .HasColumnName("DB_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.DbUser)
                    .HasColumnName("DB_USER")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IntegrationId)
                    .HasColumnName("INTEGRATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .HasColumnName("MODULE_CODE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SourceType)
                    .HasColumnName("SOURCE_TYPE")
                    .HasColumnType("tinyint(4)");
            });

            modelBuilder.Entity<SstModules>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.ToTable("sst_modules", "ins_cloud");

                entity.HasIndex(e => new { e.SystemId, e.Code })
                    .HasName("sst_modules_idx01");

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstModules)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_modules_fk01");
            });

            modelBuilder.Entity<SstNotifications>(entity =>
            {
                entity.ToTable("sst_notifications", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_notifications_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SessionKey)
                    .HasColumnName("SESSION_KEY")
                    .HasMaxLength(128)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstNotifications)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_notifications_fk01");
            });

            modelBuilder.Entity<SstNotificationsAttachments>(entity =>
            {
                entity.ToTable("sst_notifications_attachments", "ins_cloud");

                entity.HasIndex(e => e.NotificationId)
                    .HasName("sst_notifications_attachments_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AttachPath)
                    .HasColumnName("ATTACH_PATH")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NotificationId)
                    .HasColumnName("NOTIFICATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ReportCode)
                    .HasColumnName("REPORT_CODE")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Notification)
                    .WithMany(p => p.SstNotificationsAttachments)
                    .HasForeignKey(d => d.NotificationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_notifications_attachments_fk01");
            });

            modelBuilder.Entity<SstNotificationsContacts>(entity =>
            {
                entity.ToTable("sst_notifications_contacts", "ins_cloud");

                entity.HasIndex(e => e.TemplateId)
                    .HasName("sst_notifications_contacts_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.GroupId)
                    .HasColumnName("GROUP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.TemplateId)
                    .HasColumnName("TEMPLATE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.HasOne(d => d.Template)
                    .WithMany(p => p.SstNotificationsContacts)
                    .HasForeignKey(d => d.TemplateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_notifications_contacts_fk01");
            });

            modelBuilder.Entity<SstNotificationsLogs>(entity =>
            {
                entity.ToTable("sst_notifications_logs", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.KeyType)
                    .HasColumnName("KEY_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.KeyValue)
                    .HasColumnName("KEY_VALUE")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NotificationId)
                    .HasColumnName("NOTIFICATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Request)
                    .HasColumnName("REQUEST")
                    .HasMaxLength(2048)
                    .IsUnicode(false);

                entity.Property(e => e.RequestDate).HasColumnName("REQUEST_DATE");

                entity.Property(e => e.Response)
                    .HasColumnName("RESPONSE")
                    .HasMaxLength(2048)
                    .IsUnicode(false);

                entity.Property(e => e.ResponseDate).HasColumnName("RESPONSE_DATE");

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");
            });

            modelBuilder.Entity<SstNotificationsParameters>(entity =>
            {
                entity.ToTable("sst_notifications_parameters", "ins_cloud");

                entity.HasIndex(e => e.NotificationId)
                    .HasName("sst_notifications_parameters_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NotificationId)
                    .HasColumnName("NOTIFICATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ParameterRef)
                    .HasColumnName("PARAMETER_REF")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ParameterType)
                    .HasColumnName("PARAMETER_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Notification)
                    .WithMany(p => p.SstNotificationsParameters)
                    .HasForeignKey(d => d.NotificationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_notifications_parameters_fk01");
            });

            modelBuilder.Entity<SstNotificationsTemplates>(entity =>
            {
                entity.ToTable("sst_notifications_templates", "ins_cloud");

                entity.HasIndex(e => e.NotificationId)
                    .HasName("sst_notifications_templates_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Body)
                    .HasColumnName("BODY")
                    .HasColumnType("longblob");

                entity.Property(e => e.Body2)
                    .HasColumnName("BODY2")
                    .HasColumnType("longblob");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.From)
                    .HasColumnName("FROM")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NotificationId)
                    .HasColumnName("NOTIFICATION_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Subject)
                    .HasColumnName("SUBJECT")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Subject2)
                    .HasColumnName("SUBJECT2")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Notification)
                    .WithMany(p => p.SstNotificationsTemplates)
                    .HasForeignKey(d => d.NotificationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_notifications_templates_fk01");
            });

            modelBuilder.Entity<SstPages>(entity =>
            {
                entity.ToTable("sst_pages", "ins_cloud");

                entity.HasIndex(e => e.ModuleCode)
                    .HasName("sst_pages_fk01");

                entity.HasIndex(e => new { e.SystemId, e.ModuleCode })
                    .HasName("sst_pages_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)")
                    .ValueGeneratedNever();

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModuleCode)
                    .IsRequired()
                    .HasColumnName("MODULE_CODE")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.PageId)
                    .HasColumnName("PAGE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PageUrl)
                    .HasColumnName("PAGE_URL")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.ModuleCodeNavigation)
                    .WithMany(p => p.SstPages)
                    .HasForeignKey(d => d.ModuleCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_pages_fk01");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstPages)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_pages_fk02");
            });

            modelBuilder.Entity<SstPagesControls>(entity =>
            {
                entity.ToTable("sst_pages_controls", "ins_cloud");

                entity.HasIndex(e => e.ControlId)
                    .HasName("sst_pages_controls_fk02");

                entity.HasIndex(e => e.PageId)
                    .HasName("sst_pages_controls_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AllowDisabled)
                    .HasColumnName("ALLOW_DISABLED")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.AllowEditLabel)
                    .HasColumnName("ALLOW_EDIT_LABEL")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.AllowHidden)
                    .HasColumnName("ALLOW_HIDDEN")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.AllowRequired)
                    .HasColumnName("ALLOW_REQUIRED")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ClassName)
                    .HasColumnName("CLASS_NAME")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ControlId)
                    .HasColumnName("CONTROL_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ControlType)
                    .HasColumnName("CONTROL_TYPE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Form)
                    .HasColumnName("FORM")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FormType)
                    .HasColumnName("FORM_TYPE")
                    .HasColumnType("bigint(4)");

                entity.Property(e => e.IsDisabled)
                    .HasColumnName("IS_DISABLED")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.IsDynamic)
                    .HasColumnName("IS_DYNAMIC")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.IsHidden)
                    .HasColumnName("IS_HIDDEN")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.IsRequired)
                    .HasColumnName("IS_REQUIRED")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Key)
                    .IsRequired()
                    .HasColumnName("KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LabelKey)
                    .HasColumnName("LABEL_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("bigint(4)");

                entity.Property(e => e.PageId)
                    .HasColumnName("PAGE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ParamsType)
                    .HasColumnName("PARAMS_TYPE")
                    .HasColumnType("bigint(2)");

                entity.Property(e => e.ServiceUrl)
                    .HasColumnName("SERVICE_URL")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.TextType)
                    .HasColumnName("TEXT_TYPE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Control)
                    .WithMany(p => p.InverseControl)
                    .HasForeignKey(d => d.ControlId)
                    .HasConstraintName("sst_pages_controls_fk02");

                entity.HasOne(d => d.Page)
                    .WithMany(p => p.SstPagesControls)
                    .HasForeignKey(d => d.PageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_pages_controls_fk01");
            });

            modelBuilder.Entity<SstPagesControlsParams>(entity =>
            {
                entity.ToTable("sst_pages_controls_params", "ins_cloud");

                entity.HasIndex(e => e.ControlId)
                    .HasName("sst_pages_controls_params_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ControlId)
                    .HasColumnName("CONTROL_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DependOnKey)
                    .HasColumnName("DEPEND_ON_KEY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("bigint(4)");

                entity.HasOne(d => d.Control)
                    .WithMany(p => p.SstPagesControlsParams)
                    .HasForeignKey(d => d.ControlId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_pages_controls_params_fk01");
            });

            modelBuilder.Entity<SstPaymentCycles>(entity =>
            {
                entity.ToTable("sst_payment_cycles", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_payment_cycles_idx01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_payment_cycles_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Frequency)
                    .HasColumnName("FREQUENCY")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.IsEditable)
                    .HasColumnName("IS_EDITABLE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NoOfPayments)
                    .HasColumnName("NO_OF_PAYMENTS")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Share)
                    .HasColumnName("SHARE")
                    .HasColumnType("decimal(6,3)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Unit)
                    .HasColumnName("UNIT")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstPaymentCycles)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sst_payment_cycles_fk01");
            });

            modelBuilder.Entity<SstPaymentDetails>(entity =>
            {
                entity.ToTable("sst_payment_details", "ins_cloud");

                entity.HasIndex(e => e.CycleId)
                    .HasName("sst_payment_details_idx02");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_payment_details_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.CycleId)
                    .HasColumnName("cycle_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Method)
                    .HasColumnName("method")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Period)
                    .HasColumnName("period")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Share)
                    .HasColumnName("SHARE")
                    .HasColumnType("decimal(6,3)");

                entity.Property(e => e.Unit)
                    .HasColumnName("unit")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Cycle)
                    .WithMany(p => p.SstPaymentDetails)
                    .HasForeignKey(d => d.CycleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_payment_details_fk01");
            });

            modelBuilder.Entity<SstPolicyDiscounts>(entity =>
            {
                entity.ToTable("sst_policy_discounts", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_policy_discounts_fk02");

                entity.HasIndex(e => e.DiscountId)
                    .HasName("sst_policy_discounts_fk01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_policy_discounts_fk03");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.AutoAdd)
                    .HasColumnName("AUTO_ADD")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.BusinessType)
                    .HasColumnName("BUSINESS_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CoverType)
                    .HasColumnName("COVER_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountId)
                    .HasColumnName("DISCOUNT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.EffectiveDate)
                    .HasColumnName("EFFECTIVE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ExpiryDate)
                    .HasColumnName("EXPIRY_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Percent)
                    .HasColumnName("PERCENT")
                    .HasColumnType("decimal(18,3)");

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RenewalFrom)
                    .HasColumnName("RENEWAL_FROM")
                    .HasColumnType("date");

                entity.Property(e => e.RenewalTo)
                    .HasColumnName("RENEWAL_TO")
                    .HasColumnType("date");

                entity.Property(e => e.RiskType)
                    .HasColumnName("RISK_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RoundTo)
                    .HasColumnName("ROUND_TO")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SeparateVoucher)
                    .HasColumnName("SEPARATE_VOUCHER")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("0");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstPolicyDiscounts)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("sst_policy_discounts_fk02");

                entity.HasOne(d => d.Discount)
                    .WithMany(p => p.SstPolicyDiscounts)
                    .HasForeignKey(d => d.DiscountId)
                    .HasConstraintName("sst_policy_discounts_fk01");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstPolicyDiscounts)
                    .HasForeignKey(d => d.PolicyType)
                    .HasConstraintName("sst_policy_discounts_fk03");
            });

            modelBuilder.Entity<SstPolicyTypes>(entity =>
            {
                entity.ToTable("sst_policy_types", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_policy_types_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AgeDecrease)
                    .HasColumnName("age_decrease")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.BasicCover)
                    .HasColumnName("basic_cover")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.BusinessType)
                    .HasColumnName("business_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("class_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.EarnedPercent)
                    .HasColumnName("earned_percent")
                    .HasColumnType("decimal(15,10)")
                    .HasDefaultValueSql("0.0000000000");

                entity.Property(e => e.EffectiveDate).HasColumnName("effective_date");

                entity.Property(e => e.ExpiryDate).HasColumnName("expiry_date");

                entity.Property(e => e.LongTerm)
                    .HasColumnName("long_term")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.MaturityAge)
                    .HasColumnName("maturity_age")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MaxCustomerAge)
                    .HasColumnName("max_customer_age")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MaxMemberAge)
                    .HasColumnName("max_member_age")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MaxTerm)
                    .HasColumnName("max_term")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MinCustomerAge)
                    .HasColumnName("min_customer_age")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MinMemberAge)
                    .HasColumnName("min_member_age")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.MinTerm)
                    .HasColumnName("min_term")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RateBasis)
                    .HasColumnName("rate_basis")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RatePer)
                    .HasColumnName("rate_per")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RateType)
                    .HasColumnName("rate_type")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.TargetGender)
                    .HasColumnName("target_gender")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.TermBasis)
                    .HasColumnName("term_basis")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.TreatyType)
                    .HasColumnName("treaty_type")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.UnearnedBasis)
                    .HasColumnName("unearned_basis")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstPolicyTypes)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_policy_types_fk01");
            });

            modelBuilder.Entity<SstProcessActions>(entity =>
            {
                entity.ToTable("sst_process_actions", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ActionType)
                    .HasColumnName("ACTION_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.RuleId)
                    .HasColumnName("RULE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetAction)
                    .HasColumnName("TARGET_ACTION")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.TargetId)
                    .HasColumnName("TARGET_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetKey)
                    .HasColumnName("TARGET_KEY")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetParent)
                    .HasColumnName("TARGET_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.TargetType)
                    .HasColumnName("TARGET_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");
            });

            modelBuilder.Entity<SstProcessConditions>(entity =>
            {
                entity.ToTable("sst_process_conditions", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ConditionType)
                    .HasColumnName("CONDITION_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Formula)
                    .HasColumnName("FORMULA")
                    .HasColumnType("longtext");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Operator)
                    .HasColumnName("OPERATOR")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.ReferenceId)
                    .HasColumnName("REFERENCE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReferenceKey)
                    .HasColumnName("REFERENCE_KEY")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReferenceParent)
                    .HasColumnName("REFERENCE_PARENT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReferenceType)
                    .HasColumnName("REFERENCE_TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.RuleId)
                    .HasColumnName("RULE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Validator)
                    .HasColumnName("VALIDATOR")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ValidatorValue)
                    .HasColumnName("VALIDATOR_VALUE")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ValidatorValue2)
                    .HasColumnName("VALIDATOR_VALUE2")
                    .HasMaxLength(1024)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstProcessParentSteps>(entity =>
            {
                entity.ToTable("sst_process_parent_steps", "ins_cloud");

                entity.HasIndex(e => e.ProcessStepId)
                    .HasName("SST_PROCESS_STEP_FK");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.EdgeDescription)
                    .HasColumnName("EDGE_DESCRIPTION")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.EdgeType)
                    .HasColumnName("EDGE_TYPE")
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ParentShapeId)
                    .HasColumnName("PARENT_SHAPE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProcessId)
                    .HasColumnName("PROCESS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProcessStepId)
                    .HasColumnName("PROCESS_STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ShapeId)
                    .HasColumnName("SHAPE_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.ProcessStep)
                    .WithMany(p => p.SstProcessParentSteps)
                    .HasForeignKey(d => d.ProcessStepId)
                    .HasConstraintName("SST_PROCESS_STEP_FK");
            });

            modelBuilder.Entity<SstProcessRoles>(entity =>
            {
                entity.ToTable("sst_process_roles", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.GroupId)
                    .HasColumnName("GROUP_ID")
                    .HasColumnType("bigint(15)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.ProcessId)
                    .HasColumnName("PROCESS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(80)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstProcessRules>(entity =>
            {
                entity.ToTable("sst_process_rules", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.RuleTarget)
                    .HasColumnName("RULE_TARGET")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RuleType)
                    .HasColumnName("RULE_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<SstProcessSteps>(entity =>
            {
                entity.ToTable("sst_process_steps", "ins_cloud");

                entity.HasIndex(e => e.ProcessId)
                    .HasName("SST_PROCESS_FK");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.BackColor)
                    .HasColumnName("BACK_COLOR")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FontColor)
                    .HasColumnName("FONT_COLOR")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.FontSize)
                    .HasColumnName("FONT_SIZE")
                    .HasColumnType("int(3)")
                    .HasDefaultValueSql("11");

                entity.Property(e => e.Height)
                    .HasColumnName("HEIGHT")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProcessId)
                    .HasColumnName("PROCESS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProcessStepId)
                    .HasColumnName("PROCESS_STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ShapeType)
                    .HasColumnName("SHAPE_TYPE")
                    .HasColumnType("bigint(5)");

                entity.Property(e => e.StepId)
                    .HasColumnName("STEP_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Width)
                    .HasColumnName("WIDTH")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.XPosition)
                    .HasColumnName("X_POSITION")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.YPosition)
                    .HasColumnName("Y_POSITION")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Process)
                    .WithMany(p => p.SstProcessSteps)
                    .HasForeignKey(d => d.ProcessId)
                    .HasConstraintName("SST_PROCESS_FK");
            });

            modelBuilder.Entity<SstProcessSystems>(entity =>
            {
                entity.ToTable("sst_process_systems", "ins_cloud");

                entity.HasIndex(e => e.ProcessId)
                    .HasName("sst_processes_systems_fk01");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_processes_systems_fk02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ProcessId)
                    .HasColumnName("PROCESS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Process)
                    .WithMany(p => p.SstProcessSystems)
                    .HasForeignKey(d => d.ProcessId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_processes_systems_fk01");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstProcessSystems)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_processes_systems_fk02");
            });

            modelBuilder.Entity<SstProcesses>(entity =>
            {
                entity.ToTable("sst_processes", "ins_cloud");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Active)
                    .HasColumnName("ACTIVE")
                    .HasColumnType("tinyint(2)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstQuestControls>(entity =>
            {
                entity.ToTable("sst_quest_controls", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_QUEST_CONTROLS_IDX01");

                entity.HasIndex(e => e.QuestionnaireId)
                    .HasName("SST_QUEST_CONTROLS_FK01");

                entity.HasIndex(e => e.RefControlId)
                    .HasName("SST_QUEST_CONTROLS_FK02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Disabled)
                    .HasColumnName("DISABLED")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.HasSubformControls)
                    .HasColumnName("HAS_SUBFORM_CONTROLS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Hint)
                    .HasColumnName("HINT")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Icon)
                    .HasColumnName("ICON")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Key)
                    .HasColumnName("KEY")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Options)
                    .HasColumnName("OPTIONS")
                    .HasColumnType("longtext");

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.QuestionnaireId)
                    .HasColumnName("QUESTIONNAIRE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RefControlId)
                    .HasColumnName("REF_CONTROL_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Required)
                    .HasColumnName("REQUIRED")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.Type)
                    .HasColumnName("TYPE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Value)
                    .HasColumnName("VALUE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Width)
                    .HasColumnName("WIDTH")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Questionnaire)
                    .WithMany(p => p.SstQuestControls)
                    .HasForeignKey(d => d.QuestionnaireId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_QUEST_CONTROLS_FK01");

                entity.HasOne(d => d.RefControl)
                    .WithMany(p => p.InverseRefControl)
                    .HasForeignKey(d => d.RefControlId)
                    .HasConstraintName("SST_QUEST_CONTROLS_FK02");
            });

            modelBuilder.Entity<SstQuestSystems>(entity =>
            {
                entity.ToTable("sst_quest_systems", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_QUEST_SYSTEMS_IDX01");

                entity.HasIndex(e => e.QuiestionnaireId)
                    .HasName("SST_QUEST_SYSTEMS_IDX02");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_QUEST_SYSTEMS_IDX03");

                entity.HasIndex(e => new { e.SystemId, e.QuiestionnaireId })
                    .HasName("SST_QUEST_SYSTEMS_UN01")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.QuiestionnaireId)
                    .HasColumnName("QUIESTIONNAIRE_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Quiestionnaire)
                    .WithMany(p => p.SstQuestSystems)
                    .HasForeignKey(d => d.QuiestionnaireId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_QUEST_SYSTEMS_FK01");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstQuestSystems)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_QUEST_SYSTEMS_FK02");
            });

            modelBuilder.Entity<SstQuestionnaires>(entity =>
            {
                entity.ToTable("sst_questionnaires", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_QUESTIONNAIRES_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.Usage)
                    .HasColumnName("USAGE")
                    .HasColumnType("tinyint(4)");
            });

            modelBuilder.Entity<SstResources>(entity =>
            {
                entity.HasKey(e => new { e.Object, e.Name, e.Language, e.SystemId, e.CompanyId });

                entity.ToTable("sst_resources", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_resources_idx01");

                entity.Property(e => e.Object)
                    .HasColumnName("object")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .HasColumnName("language")
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.SystemId)
                    .HasColumnName("system_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("company_id")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstResources)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_resources_fk01");
            });

            modelBuilder.Entity<SstRules>(entity =>
            {
                entity.ToTable("sst_rules", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("SST_RULES_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.RuleTarget)
                    .HasColumnName("RULE_TARGET")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RuleType)
                    .HasColumnName("RULE_TYPE")
                    .HasColumnType("tinyint(4)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstRules)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_RULES_FK01");
            });

            modelBuilder.Entity<SstShortPeriods>(entity =>
            {
                entity.ToTable("sst_short_periods", "ins_cloud");

                entity.HasIndex(e => e.ClassId)
                    .HasName("sst_short_periods_fk02");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("SST_SHORT_PERIODS_IDX02");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_SHORT_PERIODS_IDX01");

                entity.HasIndex(e => e.PolicyType)
                    .HasName("sst_short_periods_fk03");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_short_periods_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AdjustPercent)
                    .HasColumnName("ADJUST_PERCENT")
                    .HasColumnType("decimal(10,5)");

                entity.Property(e => e.ApplyOn)
                    .HasColumnName("APPLY_ON")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.ClassId)
                    .HasColumnName("CLASS_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.FrequencyFrom)
                    .HasColumnName("FREQUENCY_FROM")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.FrequencyTo)
                    .HasColumnName("FREQUENCY_TO")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("NOTES")
                    .HasMaxLength(4000)
                    .IsUnicode(false);

                entity.Property(e => e.PolicyType)
                    .HasColumnName("POLICY_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.RateFraction)
                    .HasColumnName("RATE_FRACTION")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Unit)
                    .HasColumnName("UNIT")
                    .HasColumnType("tinyint(4)");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SstShortPeriods)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_short_periods_fk02");

                entity.HasOne(d => d.PolicyTypeNavigation)
                    .WithMany(p => p.SstShortPeriods)
                    .HasForeignKey(d => d.PolicyType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_short_periods_fk03");

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstShortPeriods)
                    .HasForeignKey(d => d.SystemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_short_periods_fk01");
            });

            modelBuilder.Entity<SstShortPeriodsDetails>(entity =>
            {
                entity.ToTable("sst_short_periods_details", "ins_cloud");

                entity.HasIndex(e => e.ShortPeriodId)
                    .HasName("sst_short_periods_details_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.EndorsementType)
                    .HasColumnName("ENDORSEMENT_TYPE")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ShortPeriodId)
                    .HasColumnName("SHORT_PERIOD_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.ShortPeriod)
                    .WithMany(p => p.SstShortPeriodsDetails)
                    .HasForeignKey(d => d.ShortPeriodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sst_short_periods_details_fk01");
            });

            modelBuilder.Entity<SstSmsProviders>(entity =>
            {
                entity.ToTable("sst_sms_providers", "ins_cloud");

                entity.HasIndex(e => e.SystemId)
                    .HasName("sst_sms_providers_fk01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Api)
                    .HasColumnName("API")
                    .HasMaxLength(1024)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Order)
                    .HasColumnName("ORDER")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Unicode)
                    .HasColumnName("UNICODE")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.System)
                    .WithMany(p => p.SstSmsProviders)
                    .HasForeignKey(d => d.SystemId)
                    .HasConstraintName("sst_sms_providers_fk01");
            });

            modelBuilder.Entity<SstSystems>(entity =>
            {
                entity.ToTable("sst_systems", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("sst_systems_idx01");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("bigint(20)")
                    .ValueGeneratedNever();

                entity.Property(e => e.Abbreviation)
                    .HasColumnName("abbreviation")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ApplicationId)
                    .HasColumnName("application_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CreationDate).HasColumnName("creation_date");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("creation_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("modification_date");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("modification_user")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("name2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasMaxLength(1024)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SstUserAlerts>(entity =>
            {
                entity.ToTable("sst_user_alerts", "ins_cloud");

                entity.HasIndex(e => e.AlertId)
                    .HasName("SST_USER_ALERTS_FK01");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_USER_ALERTS_IDX01");

                entity.HasIndex(e => e.UserId)
                    .HasName("SST_USER_ALERTS_FK02");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AlertId)
                    .HasColumnName("ALERT_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ReadDate).HasColumnName("READ_DATE");

                entity.Property(e => e.ReadFlag)
                    .HasColumnName("READ_FLAG")
                    .HasColumnType("tinyint(4)");

                entity.Property(e => e.SystemId)
                    .HasColumnName("SYSTEM_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Alert)
                    .WithMany(p => p.SstUserAlerts)
                    .HasForeignKey(d => d.AlertId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_USER_ALERTS_FK01");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SstUserAlerts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SST_USER_ALERTS_FK02");
            });

            modelBuilder.Entity<SstUsers>(entity =>
            {
                entity.ToTable("sst_users", "ins_cloud");

                entity.HasIndex(e => e.Id)
                    .HasName("SST_USERS_IDX01");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Address)
                    .HasColumnName("ADDRESS")
                    .HasMaxLength(2048)
                    .IsUnicode(false);

                entity.Property(e => e.BirthDate).HasColumnName("BIRTH_DATE");

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasColumnType("smallint(6)");

                entity.Property(e => e.CompanyId)
                    .HasColumnName("COMPANY_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnName("CREATION_DATE");

                entity.Property(e => e.CreationUser)
                    .IsRequired()
                    .HasColumnName("CREATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Department)
                    .HasColumnName("DEPARTMENT")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("IMAGE")
                    .HasMaxLength(124)
                    .IsUnicode(false);

                entity.Property(e => e.ImageStyle)
                    .HasColumnName("IMAGE_STYLE")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo)
                    .HasColumnName("MOBILE_NO")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnName("MODIFICATION_DATE");

                entity.Property(e => e.ModificationUser)
                    .HasColumnName("MODIFICATION_USER")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasColumnName("NAME2")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Occupation)
                    .HasColumnName("OCCUPATION")
                    .HasColumnType("int(11)");

                entity.Property(e => e.PhoneNo)
                    .HasColumnName("PHONE_NO")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.PoBox)
                    .HasColumnName("PO_BOX")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .HasColumnName("ZIP_CODE")
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });
        }
    }
}
