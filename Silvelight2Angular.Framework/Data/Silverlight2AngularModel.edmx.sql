
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/06/2019 18:37:23
-- Generated from EDMX file: C:\Users\micheleaponte\Desktop\Silvelight2Angular\Silvelight2Angular.Framework\Data\Silverlight2AngularModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Silverlight2Angular];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Utente_inherits_BaseEntity]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BaseEntities_Utente] DROP CONSTRAINT [FK_Utente_inherits_BaseEntity];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Pages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Pages];
GO
IF OBJECT_ID(N'[dbo].[BaseEntities]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BaseEntities];
GO
IF OBJECT_ID(N'[dbo].[BaseEntities_Utente]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BaseEntities_Utente];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Pages'
CREATE TABLE [dbo].[Pages] (
    [Id] int  NOT NULL,
    [XAML] nvarchar(max)  NOT NULL,
    [Note] nvarchar(max)  NULL
);
GO

-- Creating table 'BaseEntities'
CREATE TABLE [dbo].[BaseEntities] (
    [Id] int  NOT NULL
);
GO

-- Creating table 'BaseEntities_Utente'
CREATE TABLE [dbo].[BaseEntities_Utente] (
    [Nome] nvarchar(50)  NOT NULL,
    [Cognome] nvarchar(50)  NOT NULL,
    [Indirizzo] nvarchar(200)  NOT NULL,
    [CAP] nvarchar(5)  NOT NULL,
    [Citta] nvarchar(100)  NOT NULL,
    [Provincia] nvarchar(50)  NOT NULL,
    [Note1] nvarchar(max)  NULL,
    [Note2] nvarchar(max)  NULL,
    [Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Pages'
ALTER TABLE [dbo].[Pages]
ADD CONSTRAINT [PK_Pages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BaseEntities'
ALTER TABLE [dbo].[BaseEntities]
ADD CONSTRAINT [PK_BaseEntities]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BaseEntities_Utente'
ALTER TABLE [dbo].[BaseEntities_Utente]
ADD CONSTRAINT [PK_BaseEntities_Utente]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Id] in table 'BaseEntities_Utente'
ALTER TABLE [dbo].[BaseEntities_Utente]
ADD CONSTRAINT [FK_Utente_inherits_BaseEntity]
    FOREIGN KEY ([Id])
    REFERENCES [dbo].[BaseEntities]
        ([Id])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------