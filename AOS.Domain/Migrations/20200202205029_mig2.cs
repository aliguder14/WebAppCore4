using Microsoft.EntityFrameworkCore.Migrations;

namespace AOS.Domain.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Arabalar",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false),
                    Marka = table.Column<string>(nullable: true),
                    Renk = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    YapimYili = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arabalar", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Arabalar");
        }
    }
}
